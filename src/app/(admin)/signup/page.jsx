"use client";
import Button from "@/app/components/shared-component/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [Loading, setLoading] = useState(false);
  const router = useRouter()
  
  const handleSubmit = async (event) => {
     toast("Generating User and New Profile", {
       icon: "❗",
       style: {
         borderRadius: "10px",
         background: "#333",
         color: "#fff",
       },
     });
    event.preventDefault();
    setLoading(true);
    const newUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.status === 200) {
        setLoading(false);
        toast.success("User created Successfully!");
        event.target.reset();
        router.push("/signin");
      }
      if (response.status === 201) {
        setLoading(false);
        toast("Already registered with this email!", {
          icon: "❗",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

      }
    } catch (error) {
      setLoading(false);
      console.log("🚀 ~ handleLogin ~ error:", error);
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
            text={"Sign Up"}
            loading={Loading}
          />
          <h1 className="text-soft_black">
            Already have an account?
            <Link href={"/signin"} className="text-blue-500 ml-2">
              Sign In
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
