import { NextPage } from "next";

import { usePostingArr } from "../../api/usePostingArr";

const PostingList: NextPage = () => {
  const { data } = usePostingArr();
  return (
    <main>
      <h1>hi</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
};

export default PostingList;
