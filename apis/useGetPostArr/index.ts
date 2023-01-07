import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { GetPostArrDef, postingArrKeyObj } from "./type";
import { postingArrSelector } from "./util";

const getPostArr: GetPostArrDef = async () => {
  const { data } = await axios.get("http://localhost:3005/posting");
  return data;
};

export const useGetPostArr = () =>
  useQuery(postingArrKeyObj.postingArr, getPostArr, {
    select: (data) => postingArrSelector(data),
  });
