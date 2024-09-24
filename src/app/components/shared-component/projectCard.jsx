import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="mockup-window bg-base-300 border">
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
            <a
              href={project.link}
              target="_blank"
              className="text-2xl font-bold text-[#1a1a4b] opacity-100 "
              style={{ letterSpacing: 10 }}
            >
              Visit the Site
            </a>
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
    </div>
  );
}

//  <div
//       className="max-w-[550px] max-h-[520px] transform transition duration-300 hover:scale-105 relative"
//     >
//       <div
//         className="w-full h-full  p-2 "
//         style={{
//           background: "rgba(243, 244, 245, 0)",
//           boxShadow: "0 8px 32px 0 rgba(8,51,68,0.37)",
//           backdropFilter: "blur(0.5px)",
//           WebkitBackdropFilter: "blur(0.5px)",
//           borderRadius: "10px",
//           border: "1px solid rgba(255, 255, 255, 0.18)",
//         }}
//       >
//         <h1 className="text-2xl font-bold dark">
//           {project?.title}
//           <div className="w-full h-full object-cover mb-3">
//             <Image
//               src={"/assets/images/project.jpg"}
//               width={600}
//               height={600}
//               alt="project"
//             />
//           </div>
//         </h1>
//         <div>
//           <h1 className="text-soft_black mb-5">
//             {project?.details
//               ?.split(" ") // Split the details by spaces into words
//               .slice(0, 25) // Get the first 25 words
//               .join(" ") + // Join them back into a string
//               (project?.details?.split(" ").length > 25 ? "..." : "")}
//           </h1>
//           <Link
//             href={project?.link}
//             className="text-blue-500 font-semibold absolute bottom-2 right-5"
//             style={{ letterSpacing: 5 }}
//           >
//             {" "}
//             Visit
//           </Link>
//         </div>
//       </div>
//     </div>
