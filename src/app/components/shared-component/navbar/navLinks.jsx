import React from "react";
import { Link } from "react-scroll";

export default function NavLinks({
  item,
  index,
  selectedLink,
  setSelectedLink,
}) {
  const handleClick = () => {
    setSelectedLink(index); // Set the selected link to the clicked one
  };

  return (
    <Link
      scroll={true}
      key={index}
      to={item.path}
      offset={-200}
      onClick={handleClick} // Set selected link on click
      className="text-white hidden md:flex flex-col items-center cursor-pointer group"
      style={{ fontWeight: 500 }}
    >
      <h6 className="text-sm">{item.title}</h6>
      <div
        className={`w-[8px] h-1 rounded-full bg-white transition-all duration-500 
          ${selectedLink === index ? "opacity-100 translate-y-3" : "opacity-0"}
          group-hover:opacity-100 group-hover:translate-y-2`}
      ></div>
    </Link>
  );
}
