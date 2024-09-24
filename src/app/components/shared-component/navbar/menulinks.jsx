import Link from 'next/link';
import React from 'react'

export default function Menulinks({item,index}) {
  return (
  
        <div className=' text-right'>
          <Link href={item.path} className="text-white">{item.title}</Link>
        </div>
      
    
  );
}
{
  /* <Link
        key={index}
        href={item.path}
        className="group text-white hidden md:block bg-red-500"
        style={{ fontWeight: 500 }}
      >
        <h6 className="text-sm group-hover:hidden group-hover: ">
          {item.title}
        </h6>
        <h4 className="text-sm hidden group-hover:block">
          {item.title.toLowerCase()}
        </h4>
      </Link> */
}