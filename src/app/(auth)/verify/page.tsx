import { Suspense } from "react";
import Verify from "@/components/pages/verify";

export default function Page() {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  );
}
