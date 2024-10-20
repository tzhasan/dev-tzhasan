import React, { useContext } from 'react'
import { data } from '../../../../../public/data';
import { useSession } from 'next-auth/react';
import { MenuBarContext } from '@/app/provider/menubarProvider';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardNav() {
  const user = useSession();
  const { menuBar, setMenuBar } = useContext(MenuBarContext);
  const pathname = usePathname();

  return (
    <div className="w-full bg-primary_black py-3 flex items-center justify-between px-5  relative">
      <div>
        <div className="flex items-center gap-2">
          {/* Logo */}
          <h1 className="font-logo text-white text-xl sm:text-2xl md:text-4xl font-bold">
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
          <h6 className="text-gray-400 text-sm">{`User- ${"\u00A0"} ${
            user?.data?.user?.email
          }`}</h6>
        )}
      </div>
      <div className="block md:hidden" onClick={() => setMenuBar(!menuBar)}>
        {menuBar ? (
          <Image
            src={"/assets/icons/close.svg"}
            width={20}
            height={20}
            alt=""
          />
        ) : (
          <Image src={"/assets/icons/menu.svg"} width={20} height={20} alt="" />
        )}
      </div>

      <div
        className={`flex flex-col gap-5 absolute   top-[4.5rem] right-5  md:hidden
          ${menuBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          transition-all duration-500 ease-in-out `}
      >
        {menuBar &&
          items.map((item, index) => (
            <Link
              onClick={() => setMenuBar(false)}
              scroll={true}
              key={index}
              href={item.href}
              offset={-200}
              className={` ${
                pathname === item.href
                  ? "text-white bg-black"
                  : "text-black bg-gray-200"
              } py-1 px-4 md:hidden block cursor-pointer ml-auto  rounded-full w-fit`}
              style={{ fontWeight: 500 }}
            >
              <h6 className="text-sm font-bold">{item.title}</h6>
            </Link>
          ))}
      </div>
    </div>
  );
}
const items = [
  { title: "Profile", href: "/dashboard/profile" },
  { title: "Settings", href: "/dashboard/settings" },
  { title: "Messages", href: "/dashboard/messages" },
  { title: "Back to Home", href: "/" },
];