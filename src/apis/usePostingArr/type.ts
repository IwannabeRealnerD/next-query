import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  posting_id: number;
  posting_title: string;
  posting_author: string;
  posting_content: string;
}

export interface GetPostingArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef[]>;
}
