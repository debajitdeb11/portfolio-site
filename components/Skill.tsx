import { urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directionLeft?: boolean;
  alt: string,
  icon: iconObject,
  skillName: string,
};

export default function Skill({ directionLeft, alt, icon }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        alt={alt}
        src={icon ? urlFor(icon): ''}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out z-0"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
      />
    </div>
  );
}
