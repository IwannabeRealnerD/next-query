import { INTERNAL_URL } from "@/constants/internalURL";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <nav>
        <Link href={INTERNAL_URL.POSTING_LIST}>list</Link>
      </nav>
      <main>MainPage</main>
    </>
  );
}
