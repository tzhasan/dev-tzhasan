import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={project?.link}
      target="_blank"
      className="mockup-window bg-base-300 border"
    >
      <div className="bg-base-200 flex flex-col justify-center px-4 py-2 pb-4">
        {/*  */}
        <h1 className="text-xl font-bold text-gray-200 ">{project?.title}</h1>
        <div className="relative group">
          <Image
            src={"/assets/images/project.jpg"}
            width={600}
            height={600}
            alt="project"
            className="rounded-lg "
          />
          <div className="absolute top-0 bg-gray-400 bg-opacity-50 w-full h-full  flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
            <h6
              className="text-2xl font-bold text-[#1a1a4b] opacity-100 "
              style={{ letterSpacing: 10 }}
            >
              Visit the Site
            </h6>
          </div>
        </div>
        <h1 className="text-soft_black mt-2">
          {project?.details
            ?.split(" ") // Split the details by spaces into words
            .slice(0, 15) // Get the first 25 words
            .join(" ") + // Join them back into a string
            (project?.details?.split(" ").length > 15 ? "..." : "")}
        </h1>
        {/*  */}
      </div>
    </Link>
  );
}


