"use client"
import DashboardNav from "@/app/components/shared-component/navbar/dashboardNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { data } from "../../../../public/data";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const user = useSession();
  const pathname = usePathname();

  return (
    <div className=" bg-primary_black w-full  ">
      <div className="block md:hidden fixed w-full">
        <DashboardNav />
      </div>
      <div className="grid grid-cols-5 min-h-screen bg-primary_black ">
        <div className="md:col-span-1  bg-primary_black hidden md:block">
          <div>
            <div className="flex items-center gap-2 pl-2 pt-2 ">
              {/* Logo */}
              <h1 className="font-logo text-white text-md  md:text-xl lg:text-2xl font-bold">
                {data ? (
                  data?.profile?.logo
                ) : (
                  <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
                )}
              </h1>
              {user?.status === "authenticated" && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
            {user?.status === "authenticated" && (
              <h6 className="text-gray-400 text-sm ml-3">{`User- ${"\u00A0"} ${
                user?.data?.user?.email
              }`}</h6>
            )}
          </div>
          <div className="flex flex-col  mt-5">
            {items?.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`py-2 pl-2  ${
                  pathname === item.href
                    ? "text-black bg-white"
                    : "text-white bg-zinc-800"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 mt-16 md:mt-0 w-full bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

const items = [
  { title: "Profile", href: "/dashboard/profile" },
  { title: "Messages", href: "/dashboard/messages" },
  { title: "Settings", href: "/dashboard/settings" },
  { title: "Back to Home", href: "/" },
];