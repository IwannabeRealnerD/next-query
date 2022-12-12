import { NextPage } from "next";

import { usePostingArr } from "../../../api/usePostingArr";

const PostingList: NextPage = () => {
  const { data: postingArr } = usePostingArr();
  return (
    <main>
      <h1>hi</h1>
      <p>포스팅{postingArr?.map((content) => content.title)}</p>
    </main>
  );
};

export default PostingList;
