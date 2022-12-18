import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { GetPostingArrDef, postingArrKeyObj } from "./type";
import { postingArrSelector } from "./util";

const getPostingArr: GetPostingArrDef = async () => {
  const { data } = await axios.get("http://localhost:3005/posting");
  return data;
};

export const usePostingArr = () => {
  const queryResult = useQuery(postingArrKeyObj.postingArr(), getPostingArr, {
    select: (data) => postingArrSelector(data),
  });
  return queryResult;
};
