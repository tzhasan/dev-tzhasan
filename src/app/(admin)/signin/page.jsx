"use client";
import Button from "@/app/components/shared-component/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const respns = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      if (respns?.error) {
        // Log the error part of the response
        console.error("Error details:", respns?.error);
        toast.error("User not found");
        setLoading(false);
        return;
      }

      if (respns.status === 200) {
        toast.success("Sign In Successfully!");
        setLoading(false);
        event.target.reset();
        router.push("/dashboard/profile");
      }
    } catch (error) {
      // Detailed logging of the error
      console.log("🚀 ~ handleSubmit ~ error:", error);
      console.error("Detailed Error Information:", error);
      toast.error("An error occurred during sign in");
      setLoading(false);
    }
  };


  return (
    <div className="bg-white dark:bg-darkmode h-[100vh] flex items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="primary-width">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col  space-y-10 items-end primary-width"
        >
          <input
            name="email"
            type="email"
            className="text-black dark:text-white bg-white dark:bg-darkmode w-full focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 p-2 text-sm"
            placeholder="Email here*"
          />
          <input
            name="password"
            type="password"
            className="text-black dark:text-white bg-white dark:bg-darkmode w-full focus:border-b-[0.5px]  border-b-[0.5px] border-gray-300 focus:border-black focus:outline-none transition duration-500 p-2 text-sm"
            placeholder="Password here*"
          />
          <Button
            type={"submit"}
            onSubmit={handleSubmit}
            text={"Sign In"}
            loading={Loading}
          />
          <h1 className="text-soft_black">
            {"Don't have an account?"}
            <Link href={"/signup"} className="text-blue-500 ml-2">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
