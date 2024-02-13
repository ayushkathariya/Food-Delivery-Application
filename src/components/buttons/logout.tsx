"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = async () => {
    await signOut();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
