import { INTERNAL_URL } from "@/constants/internalURL";
import Link from "next/link";
import { cssObj } from "./index/style";

export default function MainPage() {
  return (
    <main>
      <nav>
        <Link href={INTERNAL_URL.POSTING_LIST} css={cssObj.linkButton}>
          posting page
        </Link>
      </nav>
      <main>MainPage</main>
    </main>
  );
}
