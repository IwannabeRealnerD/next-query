import { NextPage } from "next";

import { usePostingArr } from "@/apis/usePostingArr";
import { css } from "@emotion/react";

const PostingListPage: NextPage = () => {
  const { data: postingArr } = usePostingArr();
  return (
    <main>
      <h1>포스팅</h1>
      <section
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {postingArr?.map((content) => (
          <button key={content.id} type="button">
            <p>{content.title}</p>
          </button>
        ))}
      </section>
    </main>
  );
};

export default PostingListPage;
