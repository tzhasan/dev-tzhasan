import React from 'react'
import SkillCard from '../shared-component/skillCard'
import { skills } from '../../../../public/skills'
import Underline from '../shared-component/underline';

export default function Skills() {
  return (
    <div>
      <div className="pb-5 md:pb-5">
        <h1 className="md:text-4xl text-3xl  dark" style={{ fontWeight: 900 }}>
          Skills
        </h1>
        <Underline />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill, index) => {
          const { title, icon, description } = skill;
          return (
            <SkillCard
              title={title}
              icon={icon}
              description={description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
