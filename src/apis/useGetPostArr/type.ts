import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  posting_id: number;
  posting_title: string;
  posting_author: string;
  posting_content: string;
}

export interface GetPostArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef[]>;
}

export const postingArrKeyObj = {
  all: [{ data: "postingArr" }] as const,
  postingArr: () => [{ data: "postingArr" }] as const,
};
