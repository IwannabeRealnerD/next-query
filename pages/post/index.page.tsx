import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useGetPostArr } from "@/apis";
import { useAddPost } from "@/apis/useAddPost";
import { PostDef } from "@/type/postType";
import { postingArrKeyObj } from "@/apis/useGetPostArr/type";
import { useDeletePost } from "@/apis/useDeletePostArr";

import { cssObj } from "./style";

const PostingListPage: NextPage = () => {
  const { register, handleSubmit } = useForm<PostDef>();
  const queryClient = useQueryClient();

  const { data: postingArr } = useGetPostArr();
  const { mutate: addPostingMutation } = useAddPost();
  const { mutate: deletePostingMutation } = useDeletePost();

  const postSubmitHandler: SubmitHandler<PostDef> = (inputData) => {
    addPostingMutation(inputData, {
      onSuccess: () => queryClient.invalidateQueries(postingArrKeyObj.postingArr),
    });
  };

  const deletePostingHandler = (requestObj: { id: number }) => {
    deletePostingMutation(requestObj);
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
        {postingArr?.map((posting) => (
          <div key={`키-${posting.id}`} css={cssObj.postingBox}>
            <p>{posting.title}</p>
            {posting.id}\
            <button type="button" onClick={() => deletePostingHandler({ id: posting.id })}>
              삭제
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PostingListPage;
