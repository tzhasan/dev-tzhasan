import React from "react";
import { Link } from "react-scroll";

export default function NavLinks({ item, index }) {
  return (
      <Link
        scroll={true}
        key={index}
        to={item.path}
        offset={-200}
        className=" text-white hidden md:block cursor-pointer"
        style={{ fontWeight: 500 }}
      >
        <h6 className="text-sm group-hover:hidden ">{item.title}</h6>
        
      </Link>
  );
}
