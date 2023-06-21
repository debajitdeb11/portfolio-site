import { motion } from 'framer-motion';
import React from 'react';

export default function ExperienceCard() {
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
        src={
          'https://media.licdn.com/dms/image/D4D03AQEq8Kxtd3_A4g/profile-displayphoto-shrink_800_800/0/1681907021561?e=2147483647&v=beta&t=Qgs3oyOOKCPPeguWU7c3UTWfcVykMGD4da_qKJ-JFKI'
        }
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Debajit World</h4>
        <p className="font-bold text-2xl mt-1">PPPF</p>
        <div className="flex space-x-2 my-2">
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
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work ... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
