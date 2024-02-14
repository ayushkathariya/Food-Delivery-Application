"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();

  const handleSignIn = async () => {
    router.push("/signin");
  };

  return <Button onClick={handleSignIn}>Sign In</Button>;
}
