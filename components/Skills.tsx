import React from 'react';
import Skill from './Skill';

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {skills.map((skill) => (
          <Skill {...skill} key={skill?._id} />
        ))}
      </div>
    </div>
  );
}
