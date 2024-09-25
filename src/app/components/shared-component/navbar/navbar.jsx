"use client";
import ThemeButton from "./themeButton";
import NavLinks from "./navLinks";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuBarContext } from "@/app/provider/menubarProvider";
import Image from "next/image";
import Menulinks from "./menulinks";
import TopNav from "../topNav";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { data } from "../../../../../public/data";

export default function Navbar() {
  const user = useSession()
  const { menuBar, setMenuBar } = useContext(MenuBarContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPosition(currentScrollPos);

      // Check if user has scrolled down more than 300px
      if (currentScrollPos > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <TopNav />
      <div
        className={`bg-primary_black ${
          isScrolled ? "pt-3 pb-3" : "pt-7 pb-7"
        } transition-all duration-500`}
      >
        <div className="flex items-center justify-between primary-width bg-primary_black relative ">
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
          <div className="flex items-center space-x-10">
            {/* Navmenu */}

            {items.map((item, index) => (
              <NavLinks item={item} index={index} />
            ))}
            <div>
              <Link
                scroll={true}
                href={"./dashboard/profile"}
                className=" text-white hidden md:block cursor-pointer"
                style={{ fontWeight: 500 }}
              >
                <h6 className="text-sm group-hover:hidden ">DashBoard</h6>
                {/* <h4 className="text-sm hidden group-hover:block">
                  {item.title.toLowerCase()}
                </h4> */}
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <ThemeButton />

              <div
                className="block md:hidden "
                onClick={() => setMenuBar(!menuBar)}
              >
                {menuBar ? (
                  <Image
                    src={"/assets/icons/close.svg"}
                    width={20}
                    height={20}
                    className="trasition duration-300"
                  />
                ) : (
                  <Image
                    src={"/assets/icons/menu.svg"}
                    width={20}
                    height={20}
                    className="trasition duration-300"
                  />
                )}
              </div>

              <div
                className={`flex flex-col gap-5 absolute   right-0 top-10   md:hidden
          ${menuBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          transition-all duration-700 ease-out`}
              >
                {menuBar &&
                  items.map((item, index) => (
                    <Menulinks item={item} index={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    title: "Home",
    path: "banner",
  },
  {
    title: "About",
    path: "about-me",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
  
];
