import { NextPage } from "next";
import { useForm } from "react-hook-form";

import { useGetPostArr } from "@/apis";
import { cssObj } from "./style";

interface PostDef {
  content: string;
}

const PostingListPage: NextPage = () => {
  const { register, handleSubmit } = useForm<PostDef>();

  const { data: postingArr } = useGetPostArr();

  const postSubmitHandler = () => null;

  return (
    <main>
      <h1>포스팅</h1>
      <form css={cssObj.headerContainer} onSubmit={handleSubmit(postSubmitHandler)}>
        <input type="textarea" css={cssObj.textArea} {...register("content")} />
        <button type="button" onClick={postSubmitHandler}>
          게시글 생성
        </button>
      </form>
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
