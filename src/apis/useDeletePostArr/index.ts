import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import { DeletePostDef } from "./type";

const deletePost: DeletePostDef = async (requestObj) => {
  const { data } = await axios.delete(`http://localhost:3005/posting/${requestObj.id}`);
  return data;
};

export const useDeletePost = () => useMutation(deletePost);
