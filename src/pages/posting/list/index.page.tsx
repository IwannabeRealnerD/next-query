import { NextPage } from "next";

import { usePostingArr } from "@/apis/usePostingArr";
import { cssObj } from "./style";

const PostingListPage: NextPage = () => {
  const { data: postingArr } = usePostingArr();
  return (
    <main>
      <h1>포스팅</h1>
      <section css={cssObj.container}>
        {postingArr?.map((content) => (
          <div key={content.id} css={cssObj.postingBox}>
            <p>{content.title}</p>
            <button type="button">삭제</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PostingListPage;
