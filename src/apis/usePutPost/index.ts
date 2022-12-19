import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInatance";
import { PostDef } from "@/type/postType";

import { postPostDef } from "./type";

export const postPost: postPostDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/posting", requestObj);
  return data;
};

export const usePostpost = () => useMutation<AxiosResponse, AxiosError, PostDef>(postPost);
