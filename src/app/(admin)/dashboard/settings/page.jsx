"use client";
import Button from "@/app/components/shared-component/button";
import { signOut } from "next-auth/react";
import React from "react";

export default function Settings() {
  const handleSignOut = () => {
    signOut({
      callbackUrl: '/', // Optional: Redirect to a page after sign-out
    });
  };
  return <div>
    <Button text={"Sign Out"} onClick={handleSignOut} />
  </div>;
}
