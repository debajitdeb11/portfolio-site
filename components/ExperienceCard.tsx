import { urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';

export default function ExperienceCard({
  avatar,
  highlights,
  present,
  startDate,
  endDate,
  companyName,
  role,
}: Experience) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]">
      <motion.img
        className="2-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(avatar)}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{companyName}</h4>
        <p className="font-bold text-2xl mt-1">{role}</p>
        {/* <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQEq8Kxtd3_A4g/profile-displayphoto-shrink_800_800/0/1681907021561?e=2147483647&v=beta&t=Qgs3oyOOKCPPeguWU7c3UTWfcVykMGD4da_qKJ-JFKI"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQEq8Kxtd3_A4g/profile-displayphoto-shrink_800_800/0/1681907021561?e=2147483647&v=beta&t=Qgs3oyOOKCPPeguWU7c3UTWfcVykMGD4da_qKJ-JFKI"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQEq8Kxtd3_A4g/profile-displayphoto-shrink_800_800/0/1681907021561?e=2147483647&v=beta&t=Qgs3oyOOKCPPeguWU7c3UTWfcVykMGD4da_qKJ-JFKI"
          />
        </div> */}
        <p className="uppercase py-5 text-gray-300">
          {moment(startDate).format('MM/YYYY')} -{' '}
          {present ? 'PRESENT' : moment(endDate).format('MM/YYYY')}
        </p>
        <ul className="list-disc space-y-1 ml-5 text-lg">
          {highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}

          {/* <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li> */}
        </ul>
      </div>
    </article>
  );
}
