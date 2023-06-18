import { motion } from "framer-motion";
import React from "react";

type Props = {
    directionLeft?: boolean,
}

export default function Skill({directionLeft}: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out z-0" />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
            <div className="flex item center justify-center h-full">
                <p className="text-3xl font-bold text-bold text-black opacity-100">
                    100%
                </p>
            </div>
            </div>
        </div>
    )
}