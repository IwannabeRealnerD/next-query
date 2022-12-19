import { PostDef } from "@/type/postType";
import { AxiosResponse } from "axios";

export interface postPostDef {
  (postObj: PostDef): Promise<AxiosResponse>;
}
