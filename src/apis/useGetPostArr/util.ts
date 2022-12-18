import { ResponseObjDef } from "./type";

export const postingArrSelector = (postingArr: ResponseObjDef[]) =>
  postingArr.map((posting) => ({
    author: posting.posting_author,
    id: posting.posting_id,
    title: posting.posting_title,
    content: posting.posting_content,
  }));
