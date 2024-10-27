"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Underline from '../shared-component/underline';
import Skills from './skills';
import SocialConnect from '../shared-component/socialConnect';
import { motion, Variants,delay } from "framer-motion";
const cardVariants = {
  offscreen: {
    x: -50,
    opacity:0
  },
  onscreen: {
    opacity:1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};
const aboutMeVariant = {
  offscreen: {
    x: 50,
    opacity:0
  },
  onscreen: {
    opacity:1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};
const motionStyle = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01, // Delay between each letter
    },
  },
};
const curvePathStyle = {
  hidden: {
    opacity: 0,
    x: 600,
    y: -500,
  },
  show: {
    opacity: 1,
    x: [600, 400, 0],
    y: [-500, -400, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export default function AboutMe({ about_me, skills, social_links }) {
    const descriptionArray =about_me? about_me?.description.split(''):''
   const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div id="about-me" className="bg-white dark:bg-darkmode ">
      <div className="pt-[2%] pb-[1%] primary-width ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0 pb-20 md:pb-32">
          {about_me ? (
            <motion.div
              className="w-60 sm:w-60 md:w-80 relative mt-5 md:mt-0"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              variants={cardVariants}
            >
              {/* Image */}
              <Image
                src={about_me?.img}
                width={350}
                height={350}
                alt="About me"
                className="rounded-lg w-full h-auto shadow-2xl"
              />

              <div className="absolute top-10 left-10 w-full h-full border-2  border-zinc-500  rounded-br-3xl "></div>
            </motion.div>
          ) : (
            <div className="w-60 sm:w-60 md:w-80 flex items-center justify-center">
              <span className="loading loading-dots loading-md bg-black p-10 dark:bg-white"></span>
            </div>
          )}

          <div className="md:w-1/2 w-full md:pl-10 ml-auto space-y-5">
            {/* Text */}
            <motion.div
              className="pb-0 md:pb-5"
              variants={aboutMeVariant}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
            >
              <h1
                className="md:text-4xl text-3xl  dark"
                style={{ fontWeight: 900 }}
              >
                About Me
              </h1>
              <Underline />
            </motion.div>
            <motion.div
              variants={motionStyle}
              initial="hidden"
              animate="show"
              viewport={{ once: true, amount: 1 }}
            >
              {about_me ? (
                <motion.p
                  className="dark"
                  initial="hidden"
                  animate={isAnimating ? "show" : "hidden"} // Only animate if in viewport
                  variants={motionStyle}
                  onViewportEnter={() => setIsAnimating(true)} // Start animation on enter
                  //onViewportLeave={() => setIsAnimating(false)} // Pause animation on leave
                  viewport={{ amount: 1 }}
                >
                  {descriptionArray.map((d, index) => (
                    <motion.span
                      key={index} // Ensure a unique key for each character
                      variants={curvePathStyle}
                      style={{ display: "inline-block" }}
                      transition={{ delay: index * 0.05 }} // Sequential delay
                    >
                      {d === " " ? "\u00A0" : d}
                    </motion.span>
                  ))}
                </motion.p>
              ) : (
                <span className="loading loading-dots loading-md bg-black p-2 dark:bg-white"></span>
              )}
            </motion.div>
            <SocialConnect social_links={social_links} className={"hidden"} />
          </div>
        </div>
        <div className="">
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
}
