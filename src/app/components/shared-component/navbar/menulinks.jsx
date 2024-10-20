import { MenuBarContext } from '@/app/provider/menubarProvider';
import React, { useContext } from 'react'
import { Link } from 'react-scroll';

export default function Menulinks({ item, index }) {
  const {setMenuBar} = useContext(MenuBarContext)
  return (
    <Link
      onClick={() => setMenuBar(false)}
      scroll={true}
      key={index}
      to={item.path}
      offset={-200}
      className=" text-black  py-1 px-4 md:hidden block cursor-pointer ml-auto bg-gray-200 rounded-full w-fit"
      style={{ fontWeight: 500 }}
    >
      <h6 className="text-sm font-bold">{item.title}</h6>
    </Link>
  );
}
