import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useGetPostArr } from "@/apis";
import { usePostpost } from "@/apis/useAddPost";
import { PostDef } from "@/type/postType";
import { postingArrKeyObj } from "@/apis/useGetPostArr/type";

import { cssObj } from "./style";

const PostingListPage: NextPage = () => {
  const { register, handleSubmit } = useForm<PostDef>();
  const queryClient = useQueryClient();

  const { data: postingArr } = useGetPostArr();
  const { mutate: addPostingUpdate } = usePostpost();

  const postSubmitHandler: SubmitHandler<PostDef> = (inputData) => {
    addPostingUpdate(inputData, {
      onSuccess: () => queryClient.invalidateQueries(postingArrKeyObj.postingArr),
    });
  };

  return (
    <main>
      <h1>포스팅</h1>
      <form css={cssObj.headerContainer} onSubmit={handleSubmit(postSubmitHandler)}>
        <div>
          <p>제목</p>
          <input type="textarea" css={cssObj.textArea} {...register("posting_title")} />
        </div>
        <div>
          <p>글쓴이</p>
          <input type="textarea" css={cssObj.textArea} {...register("posting_author")} />
        </div>
        <div>
          <p>내용</p>
          <input type="textarea" css={cssObj.textArea} {...register("posting_content")} />
        </div>
        <button type="submit">게시글 생성</button>
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
