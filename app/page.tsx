
import Link from "next/link";

import { INTERNAL_URL } from "constants/internalURL";
// import Header from "../pages/header";

export default function MainPage() {
  return (
    <main>
      <nav>
        {/* <Header /> */}
        <Link href={INTERNAL_URL.POSTING_LIST}>posting page</Link>
      </nav>
      <main>MainPage</main>
    </main>
  );
}
