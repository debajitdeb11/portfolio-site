import { urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  projects: Project[],
}

export default function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80">
        {projects?.map((project, idx) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={idx}
          >
            <Image
              src={urlFor(project?.coverImage)}
              alt={project?.name}
              width={400}
              height={200}
            />
            <motion.div
              initial={{
                y: -500,
                opacity: 0,
              }}
              transition={{
                duration: 1.0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="flex flex-col space-y-5 w-auto xl:w-1/2"
            >
              <Link className="text-center" href={project?.liveLink ? project?.liveLink : '#' } target={'_blank'}>
              <h4>{project?.name}</h4>
              </Link>
              <p>
                {project?.description} {' '}
                <span className="text-gray-500 underline italic">
                  <Link target={'_blank'} href={project?.link}>
                    Learn more
                  </Link>
                </span>
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
