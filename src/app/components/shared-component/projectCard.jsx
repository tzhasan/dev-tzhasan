import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div
      className="max-w-[550px] max-h-[520px] transform transition duration-300 hover:scale-105 relative"
    >
      <div
        className="w-full h-full  p-2 "
        style={{
          background: "rgba(243, 244, 245, 0)",
          boxShadow: "0 8px 32px 0 rgba(8,51,68,0.37)",
          backdropFilter: "blur(0.5px)",
          WebkitBackdropFilter: "blur(0.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <h1 className="text-2xl font-bold dark">
          {project?.title}
          <div className="w-full h-full object-cover mb-3">
            <Image
              src={"/assets/images/project.jpg"}
              width={600}
              height={600}
              alt="project"
            />
          </div>
        </h1>
        <div>
          <h1 className="text-soft_black mb-5">
            {project?.details
              ?.split(" ") // Split the details by spaces into words
              .slice(0, 25) // Get the first 25 words
              .join(" ") + // Join them back into a string
              (project?.details?.split(" ").length > 25 ? "..." : "")}
          </h1>
          <Link
            href={project?.link}
            className="text-blue-500 font-semibold absolute bottom-2 right-5"
            style={{ letterSpacing: 5 }}
          >
            {" "}
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
