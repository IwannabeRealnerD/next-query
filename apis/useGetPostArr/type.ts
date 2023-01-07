import { PostDef } from "type/postType";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface GetPostArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<PostDef[]>;
}

export const postingArrKeyObj = {
  all: [{ data: "postingArr" }] as const,
  postingArr: [{ data: "postingArr" }] as const,
};
