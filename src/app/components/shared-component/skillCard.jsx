import Image from 'next/image';
import React from 'react'
// import { motion } from "framer-motion";
import * as motion from "framer-motion/client";
export default function SkillCard({skill}) {
  return (
    <motion.div
      className="glassCard w-full flex p-2 cursor-grabbing"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <div className="flex flex-col justify-center">
        {skill?.title ? (
          <p className="dark font-bold text-xl">{skill?.title}</p>
        ) : (
          <span className="loading loading-dots loading-md bg-black p-2 dark:bg-white"></span>
        )}
      </div>
      <div className="divider divider-horizontal divider-start">
        <Image
          src={"/assets/icons/skills2.svg"}
          width={300}
          height={300}
          alt="skill icon"
          className=" min-w-10 min-h-10 max-w-14 max-h-14 "
        />
      </div>
      <div className="flex flex-col justify-center items-start pr-3 ">
        {skill?.description ? (
          <p className="dark text-left">{skill?.description}</p>
        ) : (
          <span className="loading loading-dots loading-md bg-black p-2 dark:bg-white"></span>
        )}
      </div>
    </motion.div>
  );
}
