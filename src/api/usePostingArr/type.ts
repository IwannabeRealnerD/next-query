import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  posting_id: number;
  posting_Title: string;
  Author: string;
  Content: string;
}

export interface GetPostingArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef[]>;
}
