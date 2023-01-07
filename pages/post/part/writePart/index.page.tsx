import { NextPage } from "next";
import { useForm } from "react-hook-form";

const WritePage: NextPage = () => {
  const { register } = useForm();
  return (
    <main>
      write Page
      <form>
        <input {...register("text Input")} />
      </form>
    </main>
  );
};

export default WritePage;
