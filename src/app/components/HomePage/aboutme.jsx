"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Underline from '../shared-component/underline';
import Skills from './skills';
import SocialConnect from '../shared-component/socialConnect';
export default function AboutMe({ about_me, skills, social_links }) {
  
  return (
    <div id="about-me" className="bg-white dark:bg-darkmode ">
      <div className="pt-[2%] pb-[1%] primary-width ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0 pb-20 md:pb-32">
          {about_me ? (
            <div className="w-60 sm:w-60 md:w-80 relative">
              {/* Image */}
              <Image
                src={about_me?.img}
                width={350}
                height={350}
                alt="About me"
                className="rounded-lg w-full h-auto shadow-2xl"
              />

              <div className="absolute top-10 left-10 w-full h-full border-2  border-zinc-500  rounded-br-3xl "></div>
            </div>
          ) : (
            <div className="w-60 sm:w-60 md:w-80 flex items-center justify-center">
              <span className="loading loading-dots loading-md bg-black p-10 dark:bg-white"></span>
            </div>
          )}

          <div className="md:w-1/2 w-full md:pl-10 ml-auto space-y-5">
            {/* Text */}
            <div className="pb-10">
              <h1
                className="md:text-4xl text-3xl  dark"
                style={{ fontWeight: 900 }}
              >
                About Me
              </h1>
              <Underline />
            </div>
            {about_me ? (
              <p className="dark">{about_me?.description}</p>
            ) : (
              <span className="loading loading-dots loading-md bg-black p-2 dark:bg-white"></span>
            )}
            <SocialConnect social_links={social_links} />
          </div>
        </div>
        <div className="">
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
}
