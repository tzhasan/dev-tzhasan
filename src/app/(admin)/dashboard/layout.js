"use client"
import Button from "@/app/components/shared-component/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function layout({ children }) {
  const pathname = usePathname()
  return (
    <div className="h-screen w-full bg-gray-500">
      <div className="flex ">
        <div className="w-2/12 h-[100vh] border flex flex-col">
          {/* left */}
          {links.map((link, i) => <button className={`btn ${pathname===link.href&& "btn-success"}`} key={i}> <Link href={link.href}>{link.title }</Link></button>)}
        </div>
        <main className="w-10/12 border bg-green-200">
          {/* right */}
          {children}
        </main>
      </div>
    </div>
  );
}

const links = [
  {title:"Profile", href:"/dashboard/profile"},
  {title:"Settings", href:"/dashboard/settings"},
  {title:"Chart", href:"/dashboard/chart"},
]