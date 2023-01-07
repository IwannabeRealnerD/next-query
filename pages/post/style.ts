import { css } from "@emotion/react";

export const cssObj = {
  headerContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0 2rem;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: lightgray;
  `,
  textArea: css`
    width: 20rem;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem 0;
  `,
  postingBox: css`
    width: 30rem;
    background-color: #ffc0cba8;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    > p {
      margin: 1rem 1rem;
    }
    > button {
      margin: 0.8rem 0.8rem;
      border-radius: 1rem;
    }
  `,
};
