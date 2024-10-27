"use client";
import React from "react";
import Underline from "../shared-component/underline.jsx";
import Waveup from "../../../../public/assets/icons/waveup.jsx";
import Wavedown from "../../../../public/assets/icons/wavedown.jsx";
import ProjectsCarousel from "../shared-component/ProjectsCarousel.jsx";
export default function Projects({ projects }) {
  return (
    <div className="w-full pt-10 bg-white dark:bg-darkmode">
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
              <div className=" mt-5">
                {projects ? (
                  <ProjectsCarousel projects={projects} />
                ) : (
                  <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-around">
                    <div className="skeleton h-[30vh] w-80"></div>
                    <div className="skeleton h-[30vh] w-80"></div>
                    <div className="skeleton h-[30vh] w-80"></div>
                  </div>
                )}
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
export const projectsSkeleton = [1, 2, 3, 4, 5, 6];
