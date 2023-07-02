import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {
  social: Social[];
  info: Info[];
};

export default function Header({ social, info }: Props) {
  function makeLink(source: string): string {
    if (source.includes('@')) {
      return `mailto:${source}`;
    } else {
      return `tel:${source}`;
    }
  }

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
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
        {social.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.link}
            fgColor={'grey'}
            bgColor={'transparent'}
          />
        ))}
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
          url={makeLink(info[0].email)}
        />
        <Link
          href={makeLink(info[0].phoneNumber)}
          className="uppercase text-gray-400"
        >
          {info[0].phoneNumber}
        </Link>
      </motion.section>
    </header>
  );
}
