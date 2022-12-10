import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  posts: { id: number; title: string; author: string; content: string }[];
}

export interface GetPostingArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
