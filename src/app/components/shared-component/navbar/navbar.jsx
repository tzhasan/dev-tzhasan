"use client";
import ThemeButton from "./themeButton";
import NavLinks from "./navLinks";

export default function Navbar() {
  
  return (
    <div className="bg-primary_black py-5 ">
      <div className="flex items-center justify-between primary-width">
        <div>
          {/* Logo */}
          <h1 className="font-logo text-white text-xl sm:text-2xl md:text-4xl font-bold">Tz-Hasan</h1>
        </div>
        <div className="flex items-center gap-12">
          {/* Navmenu */}
          {/* {items.map((item, index) => (
            <NavLinks item={item} index={index } />
          ))} */}
          <>
            <ThemeButton/>
          </>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Home",
    path: "./",
  },
  {
    title: "About",
    path: "./about",
  },
  {
    title: "Projects",
    path: "./projects",
  },
  {
    title: "Contact",
    path: "./contact",
  },
];
