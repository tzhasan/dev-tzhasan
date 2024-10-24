import Image from 'next/image';
import React from 'react'
import VarticalLine from './varticalLine';
export default function SkillCard({ skill }) {
  return (
    <div
      className="md:tooltip  md:p-5 p-5 mb-10 md:mb-0 rounded-md  dark:md:hover:bg-cyan-900 hover:bg-zinc-100 cursor-pointer transition-colors duration-300 w-[90%] mx-auto"
      data-tip={skill?.description}
    >
      <div className="flex   md:gap-5 gap-1    text-start">
        <div className="flex flex-col   md:mt-[-4%] mt-[-8%]">
          <div>
            <Image
              src={"/assets/icons/skills2.svg"}
              width={300}
              height={300}
              alt="skill icon"
              className=" min-w-10 min-h-10 max-w-14 max-h-14 "
            />
          </div>
          {/* horizontal line */}
          <VarticalLine />
        </div>
        <div className="space-y-2 ">
          {skill?.title ? (
            <h1
              className="text-xl md:text-2xl dark"
              style={{ fontWeight: 500 }}
            >
              {skill?.title}
            </h1>
          ) : (
            "Loading..."
          )}
          {skill?.description ? (
            <p className="text-sm text-soft_black">
              {/* {skill?.description} */}
              {skill?.description?.split(" ").splice(0, 40).join(" ") +
                (skill?.description?.split(" ").length > 40 ? "..." : "")}
            </p>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
}
