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
  companyLocation,
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
      <div className="px-0">
        <div className="text-center">
          <h4 className="text-2xl font-light text-gray-500">{companyName}</h4>
          <p className="text-lg mt-1 text-gray-600">{role}</p>
          <p className="text-md text-gray-600">{companyLocation}</p>
          <p className="uppercase py-2 text-gray-400 text-sm">
            {moment(startDate).format('MM/YYYY')} -{' '}
            {present ? 'PRESENT' : moment(endDate).format('MM/YYYY')}
          </p>
        </div>

        <ul className="list-disc space-y-1 ml-5 text-sm text-gray-500/90">
          {highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
