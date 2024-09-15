import Link from 'next/link';
import React from 'react'

export default function NavLinks({item,index}) {
  return (
    <Link
      key={index}
      href={item.path}
      className="group text-white"
      style={{ fontWeight: 500 }}
    >
      <h6 className="text-sm">{item.title}</h6>
      {/* <h4 className='hidden group-hover:block'>{item.title.toLowerCase()}</h4> */}
    </Link>
  );
}
