import React from 'react'
import SkillCard from '../shared-component/skillCard'
import { skills } from '../../../../public/skills'

export default function Skills() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {skills.map((skill, index) => 
      {
        const { title, icon, description } = skill;
       return <SkillCard
          title={title}
          icon={icon}
          description={description}
          key={index}
        />;
      }
      )}
    </div>
  );
}
