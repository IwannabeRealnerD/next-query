import { AxiosResponse } from "axios";

interface RequestObjDef {
  id: number;
}

export interface DeletePostDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
