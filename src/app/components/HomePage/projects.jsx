"use client";
import Image from "next/image";
import React from "react";
import Underline from "../shared-component/underline.jsx";
import { projects } from "../../../../public/projects.js";
import Waveup from "../../../../public/assets/icons/waveup.jsx";
import Link from "next/link";
import Wavedown from "../../../../public/assets/icons/wavedown.js";
import ProjectCard from "../shared-component/projectCard.jsx";
export default function Projects() {
  return (
    <div className="w-full  bg-white dark:bg-darkmode">
      <Wavedown />
      <div
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
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-5 ">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} project={project} />;
                })}
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
