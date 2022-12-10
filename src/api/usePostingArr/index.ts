import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { postingArrKeyObj } from "./keyObjFactory";
import { GetPostingArrDef } from "./type";

const getPostingArr: GetPostingArrDef = async () => {
  const { data } = await axios.get("http://localhost:3005/posting");
  return data;
};

export const usePostingArr = () => {
  const queryResult = useQuery(postingArrKeyObj.postingArr(), getPostingArr, {
    // select: ({ data }) => selector(data),
  });
  return queryResult;
};
