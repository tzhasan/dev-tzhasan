"use client";
import React from "react";
import Underline from "../shared-component/underline.jsx";
import Waveup from "../../../../public/assets/icons/waveup.jsx";
import Wavedown from "../../../../public/assets/icons/wavedown.js";
import ProjectCard from "../shared-component/projectCard.jsx";
import { data } from "../../../../public/data.js";
export default function Projects() {
  const {projects} = data
  return (
    <div className="w-full  bg-white dark:bg-darkmode">
      <Wavedown />
      <div
        id="projects"
        className="bg-wave dark:bg-primary_black pb-3
      "
      >
        <div className="primary-width pb-5 md:pb-10">
          <div>
            <div className="pb-10">
              <h1
                className="md:text-4xl text-3xl  dark"
                style={{ fontWeight: 900 }}
              >
                My Projects
              </h1>
              <Underline />
            </div>
            <div>
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-5">
                {
                  data? projects.map((project, index) => {
                  return <ProjectCard key={index} project={project} />;
                }):
                (projectsSkeleton.map((project, index) => {
                  return <div className="skeleton h-[30vh] " key={index}></div>;
                }))
               }
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Waveup />
    </div>
  );
}


export const projectsSkeleton = [1,2,3,4,5,6];