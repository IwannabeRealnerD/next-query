import { PostDef } from "type/postType";
import { AxiosResponse } from "axios";

export interface AddPostDef {
  (postObj: PostDef): Promise<AxiosResponse>;
}
