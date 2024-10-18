"use client";
import Button from "@/app/components/shared-component/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Settings() {
  const handleSignOut = () => {
    signOut({
      callbackUrl: '/', // Optional: Redirect to a page after sign-out
    });
  };
  return <div className="p-5 space-x-2 flex flex-row items-center">
    <Link href={'/signin'}>
      <Button text={'Sign In'}  />
    </Link>
    <Button text={"Sign Out"} onClick={handleSignOut} />
  </div>;
}
