import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Debajit Deb", "The Guy who love to code", "<Error />"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image alt="Debajit Deb" width={64} height={64} className="relative rounded-full mx-auto object-cover" src={'https://media.licdn.com/dms/image/D4D03AQEq8Kxtd3_A4g/profile-displayphoto-shrink_800_800/0/1681907021561?e=2147483647&v=beta&t=Qgs3oyOOKCPPeguWU7c3UTWfcVykMGD4da_qKJ-JFKI'}/>
            <div className="z-20">
                <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">{'Software Engineer'}</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor={'yellow'} />
            </h1>

            <div>
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
            </div>

            </div>
           
        </div>
    )
}