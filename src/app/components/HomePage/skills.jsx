import React from 'react'
import SkillCard from '../shared-component/skillCard'
import Underline from '../shared-component/underline';

export default function Skills({skills}) {
  return (
    <>
      <div className="pb-5 md:pb-5">
        <h1 className="md:text-4xl text-3xl  dark" style={{ fontWeight: 900 }}>
          Skills
        </h1>
        <Underline />
      </div>
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
