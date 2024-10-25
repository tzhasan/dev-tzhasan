"use client"
import DashboardNav from "@/app/components/shared-component/navbar/dashboardNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import { RiProfileLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import { TbBrandGoogleHome } from "react-icons/tb";
import { profileContext } from "@/app/provider/profileProvider";

export default function Layout({ children }) {
  const { profile } = useContext(profileContext);
  const user = useSession();
  const pathname = usePathname();

 return (
   <div className="min-h-screen overflow-x-hidden bg-primary_black">
     {/* Navbar for smaller screens */}
     <div className="block md:hidden fixed top-0 left-0 w-full z-10">
       <DashboardNav items={ items} />
     </div>

     {/* Main layout with fixed sidebar for larger screens */}
     <div className=" min-h-screen bg-primary_black md:grid md:grid-cols-5">
       {/* Sidebar */}
       <div className="md:col-span-1 bg-primary_black hidden md:block md:h-full">
         <div className="md:fixed md:w-[calc(20%)]">
           <>
             {/* Logo and status */}
             <div className="flex items-center gap-2 pl-2 pt-2">
               <h1 className="font-logo text-white text-md md:text-xl lg:text-2xl font-bold">
                 {profile ? (
                   profile?.profile?.logo
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
           </>

           {/* Sidebar menu items */}
           <div className="flex flex-col mt-5">
             {items?.map((item, index) => (
               <Link
                 href={item.href}
                 key={index}
                 className={`py-2 pl-2 flex items-center gap-2 ${
                   pathname === item.href
                     ? "text-black bg-white"
                     : "text-white bg-zinc-800"
                 }`}
               >
                 {item.icon}
                 {item.title}
               </Link>
             ))}
           </div>
         </div>
       </div>

       {/* Content section */}
       <div className="md:col-span-4 mt-16 md:mt-0 w-full bg-white">
         {children}
       </div>
     </div>
   </div>
 );
}

const items = [
  { title: "Profile", href: "/dashboard/profile", icon: <RiProfileLine /> },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: <BiMessageSquareDetail />,
  },
  { title: "Settings", href: "/dashboard/settings", icon: <VscSettings /> },
  { title: "Back to Home", href: "/", icon: <TbBrandGoogleHome /> },
];



