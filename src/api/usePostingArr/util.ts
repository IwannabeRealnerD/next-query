import { ResponseObjDef } from "./type";

export const postingArrSelector = (postingArr: ResponseObjDef[]) =>
  postingArr.map((posting) => ({
    author: posting.Author,
    id: posting.posting_id,
    title: posting.posting_Title,
    content: posting.Content,
  }));
