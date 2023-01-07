import { INTERNAL_URL } from "@/constants/internalURL";
import Link from "next/link";

export default function MainPage() {
  return (
    <main>
      <nav>
        <h1 className="text-xl font-bold underline">Hello world!</h1>
        <Link href={INTERNAL_URL.POSTING_LIST}>posting page</Link>
      </nav>
      <main>MainPage</main>
    </main>
  );
}
