import { urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  about: About[];
};

export default function About({ about }: Props) {
  const { details, image } = about[0];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.0,
      }}
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        alt="My Image"
        src={urlFor(image)}
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] p-10"
      />
      <div className="space-y-10 px-0 md: py-10 ">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]">little</span> bit
          about me!
        </h4>
        <p className="text-sm">{details}</p>
      </div>
    </motion.div>
  );
}
