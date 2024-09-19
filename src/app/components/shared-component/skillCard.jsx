import Image from 'next/image';
import React from 'react'
import VarticalLine from './varticalLine';
export default function SkillCard({ title, icon, description }) {
  
  return (
    <div className="flex  mx-auto md:gap-5 gap-1 w-[90%]  md:p-5 rounded-md  dark:md:hover:bg-cyan-900 hover:bg-zinc-100 cursor-pointer transition-colors duration-300 ">
      <div className="flex flex-col   md:mt-[-4%] mt-[-8%]">
        <div>
          <Image
            src={"/assets/icons/skills2.svg"}
            width={300}
            height={300}
            alt="skill icon"
            className=" min-w-10 min-h-10 max-w-14 max-h-1max-w-14"
          />
        </div>
        {/* horizontal line */}
        <VarticalLine />
      </div>
      <div className="space-y-2 ">
        {title ? (
          <h1 className="text-xl md:text-2xl dark" style={{ fontWeight: 500 }}>
            {title}
          </h1>
        ) : (
          "Loading..."
        )}
        {description ? (
          <p className="text-sm text-soft_black">
            {description?.split(" ").splice(0, 20).join(" ") +
              (description.split(" ").length > 20 ? "..." : "")}
          </p>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
