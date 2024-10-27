import { themeProvider } from "@/app/provider/themeProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { delay, motion } from "framer-motion";

const motionStyle1 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each letter
    },
  },
};
const motionStyle2 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each letter
      delay:2
    },
  },
};

// Define keyframes for the curve path
const curvePathStyle = {
  hidden: {
    opacity: 0,
    x: 600,
    y: -500,
  },
  show: {
    opacity: 1,
    x: [600,400, 0],
    y: [-500,-400, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export default function Banner({ profile }) {
   const name = profile ? `I'M ${profile.name}` : "";
   const profession = profile ? profile.profession : ""; 
    const nameArray = name.split("");
    const profArray = profession.split("");
  const { isChecked, setisChecked } = useContext(themeProvider);

  return (
    <div className="bg-primary_black pt-[75px] " id="banner">
      <div className="primary-width flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="md:space-y-3 space-y-1 mr-auto md:mx-auto">
          {profile ? (
            <motion.div variants={motionStyle1} initial="hidden" animate="show">
              <motion.p
                className="lg:text-6xl text-2xl text-white"
                style={{ fontWeight: 200 }}
              >
                {nameArray.map((t, index) => (
                  <motion.span
                    key={index}
                    variants={curvePathStyle}
                    style={{ display: "inline-block" }} // Ensure each letter animates independently
                    transition={{ delay: index * 0.1 }}
                  >
                    {t === " " ? "\u00A0" : t}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ) : (
            <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
          )}
          {profile ? (
            <motion.div
              variants={motionStyle2}
              initial="hidden"
              animate="show"
            >
              <motion.p
                className="md:text-2xl text-md text-white "
                style={{
                  fontWeight: 200,
                  letterSpacing: 5,
                }}
              >
                {profArray.map((t, index) => (
                  <motion.span
                    key={index}
                    variants={curvePathStyle}
                    style={{ display: "inline-block" }} // Ensure each letter animates independently
                    transition={{ delay: index * 0.1 }}
                  >
                    {t === " " ? "\u00A0" : t}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ) : (
            <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
          )}
        </div>
        <div>
          {/* IMAGE */}
          {profile ? (
            <Image
              src={profile?.img}
              width={500}
              height={500}
              alt="profile Image"
            />
          ) : (
            <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
          )}
        </div>
      </div>
      <div className={`${isChecked ? "bg-cyan-950" : "bg-white"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 150">
          <path
            fill="#1f1f1f"
            fill-opacity="1"
            d="M0,224L480,160L960,224L1440,192L1440,0L960,0L480,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
