'use client'

import Image from "next/image";
import { motion } from 'framer-motion'

interface PostProps {
    title: string;
    image?: any;
    description: string;
}
export function PostHighlight({ image, title, description }: PostProps) {
    let newUrlImage = 'http://localhost:1337' + image

    return (
        newUrlImage &&
        <div className={` w-full h-72 text-black flex  relative items-end`}>
            <h1 className="bg-teal-900/90 text-white font-semibold absolute z-10 p-2 m-5">{title}</h1>
            <motion.img
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.5 },
                }}
                src={image} className="absolute z-0 h-full w-full" alt="Image" />
        </div>
    )
}