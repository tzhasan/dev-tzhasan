"use client";
import ThemeButton from "./themeButton";
import NavLinks from "./navLinks";
import { useContext, useEffect, useState } from "react";
import { MenuBarContext } from "@/app/provider/menubarProvider";
import Image from "next/image";
import Menulinks from "./menulinks";
import TopNav from "../topNav";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoInformationCircleOutline } from "react-icons/io5";
import { profileContext } from "@/app/provider/profileProvider";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Navbar() {
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 15,
  restDelta: 0.001,
});
  const user = useSession()
    const [selectedLink, setSelectedLink] = useState(0);
  const { menuBar, setMenuBar } = useContext(MenuBarContext);
    const { profile } = useContext(profileContext);

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
          isScrolled ? "py-3" : "pt-7 pb-7"
        } transition-all duration-500`}
      >
        <div className="flex items-center justify-between primary-width bg-primary_black relative ">
          <div className="flex flex-col relative">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <h1 className="font-logo text-white text-xl sm:text-2xl md:text-4xl font-bold">
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
            <motion.div
              className="progress-bar"
              style={{ scaleX }}
            ></motion.div>
          </div>
          <div className="flex items-center space-x-10">
            {/* Navmenu */}

            {items.map((item, index) => (
              <NavLinks
                key={index}
                item={item}
                index={index}
                setSelectedLink={setSelectedLink}
                selectedLink={selectedLink}
              />
            ))}
            {user?.status === "authenticated" && (
              <div>
                <Link
                  href={"./dashboard/profile"}
                  className=" text-white hidden md:block cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  <h6 className="text-sm  ">DashBoard</h6>
                </Link>
              </div>
            )}
            <div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className=" text-white hidden md:block cursor-pointer"
                style={{ fontWeight: 500 }}
              >
                <IoInformationCircleOutline className="font-bold text-xl" />
              </button>
            </div>

            <div className="flex items-center gap-5">
              <ThemeButton />

              <div
                className="block md:hidden "
                onClick={() => setMenuBar(!menuBar)}
              >
                {menuBar ? (
                  <Image
                    alt=""
                    src={"/assets/icons/close.svg"}
                    width={20}
                    height={20}
                    className="trasition duration-300"
                  />
                ) : (
                  <Image
                    alt=""
                    src={"/assets/icons/menu.svg"}
                    width={20}
                    height={20}
                    className="trasition duration-300"
                  />
                )}
              </div>

              <div
                className={`flex flex-col gap-5 absolute   right-0 top-14   md:hidden
          ${menuBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
          transition-all duration-500 ease-in-out `}
              >
                {menuBar &&
                  items.map((item, index) => (
                    <Menulinks key={index} item={item} index={index} />
                  ))}
                {user?.status === "authenticated" && (
                  <div className="transition duration-500 ease-in-out">
                    <Link
                      scroll={true}
                      href={"./dashboard/profile"}
                      className=" text-black py-1 px-4 md:hidden block cursor-pointer ml-auto bg-gray-200 rounded-full w-fit"
                      style={{ fontWeight: 500 }}
                    >
                      <h6 className="text-sm font-bold">DashBoard</h6>
                    </Link>
                  </div>
                )}
                <div className="transition duration-300 ease-in-out">
                  <button
                    className=" text-black py-1 px-4 md:hidden block cursor-pointer ml-auto bg-gray-200 rounded-full w-fit text-sm font-bold"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    <IoInformationCircleOutline className="font-bold text-xl" />
                  </button>
                </div>
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
