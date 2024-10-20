"use client";
import Button from "@/app/components/shared-component/button";
import Navbar from "@/app/components/shared-component/navbar/navbar";
import { getProjects } from "@/app/utils/dataFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  const handleGoBack = () => {
    router.back()
  }
  useEffect(() => {
    const fetchData = async () => {
       setLoading(true);
      try {
        const data = await getProjects(
          `${
            status === "authenticated"
              ? session.user.email
              : process.env.NEXT_PUBLIC_DEFAULT_MAIL
          }`
        );
        setProjects(data?.projects);
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status]);
  const projectIndex = parseInt(params.index, 10);

  const theProject = projects[projectIndex];
  return (
    <div className="bg-white dark:bg-darkmode min-h-screen p-10 ">
      {loading ? (
        <div className="flex w-full flex-col gap-7">
          <div className="skeleton h-8 w-3/5 bg-gray-400"></div>
          <div className="skeleton h-4 w-full bg-gray-400"></div>
          <div className="skeleton h-4 w-4/5 bg-gray-400"></div>
          <div className="skeleton h-4 w-3/5 bg-gray-400"></div>
          <div className="flex gap-2">
            <div className="skeleton h-10 w-28 bg-gray-400"></div>
            <div className="skeleton h-10 w-28 bg-gray-400"></div>
          </div>
          <div className="skeleton h-80 w-full bg-gray-400"></div>
        </div>
      ) : (
        <div className="space-y-5 flex flex-col">
          <h1 className="dark text-2xl md:text-5xl font-bold">{`Project Name- ${theProject?.title}`}</h1>
          <p className="text-sm md:text-xl dark">{`Details- ${theProject?.details}`}</p>
          <div className="flex gap-2">
            <Link href={theProject?.link} target="_blank">
              <Button text={"Visit Site"} />
            </Link>
            <Button onClick={handleGoBack} text={"Go Back"} />
          </div>
          <div className="mockup-browser bg-base-300 border ">
            <div className="mockup-browser-toolbar">
              <div className="input">{theProject?.link}</div>
            </div>
            <div className="bg-base-200 flex justify-center ">
              <Image
                src={theProject?.img}
                width={500}
                height={500}
                alt="Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
