import Image from 'next/image';
import React from 'react'
import VarticalLine from './varticalLine';
export default function SkillCard({ title, icon, description }) {
  
  return (
    <div className="flex items-center mx-auto gap-5 w-[90%]  p-5 rounded-md  dark:md:hover:bg-cyan-900 hover:bg-zinc-100 cursor-pointer transition-colors duration-300">
      <div className="flex flex-col items-center gap-2">
        <div>
          <Image
            src={"/assets/icons/jsIcon.svg"}
            width={50}
            height={50}
            alt="skill icon"
            className="w-52"
          />
        </div>
        {/* horizontal line */}
        <VarticalLine />
      </div>
      <div className="space-y-2">
        {title ? (
          <h1 className="text-2xl dark" style={{ fontWeight: 500 }}>
            {title}
          </h1>
        ) : (
          "Loading..."
        )}
        {description ? (
          <p className="text-sm softdark">{description}</p>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
