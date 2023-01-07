import { PostDef } from "type/postType";

export const postingArrSelector = (postingArr: PostDef[]) =>
  postingArr.map((posting) => ({
    author: posting.posting_author,
    id: posting.id,
    title: posting.posting_title,
    content: posting.posting_content,
  }));
