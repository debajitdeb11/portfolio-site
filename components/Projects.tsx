import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  const projects: Array<Object> = [1, 2, 3, 4];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80">
        {projects.map((project, idx) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={idx}
          >
            <img
              src="https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt={'Hello'}
              width={700}
              height={300}
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
              <h4>Case study {idx + 1} of 4 : UPS clone</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                perferendis praesentium explicabo sed tenetur quas labore
                libero, dolore perspiciatis. Expedita possimus autem asperiores
                non nobis dolorem quis aliquid praesentium consectetur.{' '}
                <span className="text-gray-500 underline italic">
                  <Link target={'_blank'} href={'https://www.google.com'}>
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
