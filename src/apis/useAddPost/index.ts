import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInatance";
import { PostDef } from "@/type/postType";

import { AddPostDef } from "./type";

export const addPost: AddPostDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/posting", requestObj);
  return data;
};

export const useAddPost = () => useMutation<AxiosResponse, AxiosError, PostDef>(addPost);
