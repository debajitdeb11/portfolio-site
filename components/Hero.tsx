import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/client';
type Props = {
  info: Info[];
};

export default function Hero({ info }: Props) {
  const { name, profilePicture, heroSildeContent = [] } = info[0];

  const [text, count] = useTypewriter({
    words: [...heroSildeContent],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        priority={false}
        src={urlFor(profilePicture)}
        alt="Debajit Deb"
        width={128}
        height={128}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">
          {name}
        </h2>
        {heroSildeContent.length > 0 && (
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor={'yellow'} />
          </h1>
        )}

        <div className="pt-3">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <a href={'../assets/resume/Debajit-Resume-april.pdf'} download={true}>
            <button className="heroButton">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
