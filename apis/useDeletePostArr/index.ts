import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PostDef } from "type/postType";

import { DeletePostDef } from "./type";
import { postingArrKeyObj } from "../useGetPostArr/type";

const deletePost: DeletePostDef = async (requestObj) => {
  const { data } = await axios.delete(`http://localhost:3005/posting/${requestObj.id}`);
  return data;
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(postingArrKeyObj.postingArr);
      const previousData = queryClient.getQueryData(postingArrKeyObj.postingArr);

      queryClient.setQueryData<PostDef[]>(postingArrKeyObj.postingArr, (oldPostArr) => {
        if (!oldPostArr) return undefined;

        const filteredArr = oldPostArr.filter((oldPost) => oldPost.id !== requestObj.id);
        return [...filteredArr];
      });

      return { previousData, requestObj };
    },
  });
};
