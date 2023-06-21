import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-auto xl:items-center">
      <motion.section
        className={'flex flex-row items-center'}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/debajitdeb11"
          fgColor={'grey'}
          bgColor={'transparent'}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/debajitdeb11"
          fgColor={'grey'}
          bgColor={'transparent'}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/debajitdeb11"
          fgColor={'grey'}
          bgColor={'transparent'}
        />
      </motion.section>

      <motion.section
        className={'flex flex-row items-center cursor-pointer'}
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.0,
        }}
      >
        <SocialIcon
          className={'cursor-pointer'}
          network={'email'}
          fgColor={'gray'}
          bgColor={'transparent'}
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.section>
    </header>
  );
}
