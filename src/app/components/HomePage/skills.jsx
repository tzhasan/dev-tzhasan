import React from 'react'
import SkillCard from '../shared-component/skillCard'
import Underline from '../shared-component/underline';
import { motion, Variants, delay } from "framer-motion";
const aboutMeVariant = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2.5,
    },
  },
};
export default function Skills({skills}) {
  return (
    <>
      <motion.div
        className="pb-0 md:pb-5"
        variants={aboutMeVariant}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <h1 className="md:text-4xl text-3xl  dark" style={{ fontWeight: 900 }}>
          Skills
        </h1>
        <Underline />
      </motion.div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-8 mt-5">
        {skills &&
          skills.map((skill, index) => {
            const { title, description } = skill;
            return <SkillCard skill={skill} key={index} />;
          })}
      </div>
    </>
  );
}
