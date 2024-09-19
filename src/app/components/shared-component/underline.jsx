import React from 'react'

export default function Underline({className}) {
  return (
    <div className="flex items-center md:w-56 w-32">
      <div className={`h-[5px] ${className?className:"darkdiv"}  w-3/12`}></div>
      <div className={`h-[1px] ${className?className:"darkdiv"}  w-9/12`}></div>
    </div>
  );
}
