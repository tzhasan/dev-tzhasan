"use client";
import Button from "@/app/components/shared-component/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function page() {
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
        callbackUrl: path ? path : "/",
      });
      console.log("🚀 ~ handleSubmit ~ respns:", respns)
      if (respns.status === 200) {
        toast.success("Sign In Successfully!");
        setLoading(false);
        console.log("🚀 ~ page ~ session:", session);
        event.target.reset();
        router.push("/");
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };
  return (
    <div className="bg-white h-[100vh] flex items-center">
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
          <div className="w-1/5">
            <Button
              type={"submit"}
              onSubmit={handleSubmit}
              text={"Sign In"}
              loading={Loading}
            />
          </div>

          <h1 className="text-soft_black">
            Don't have an account?{" "}
            <Link href={"/admin/signup"} className="text-blue-500 ml-2">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
