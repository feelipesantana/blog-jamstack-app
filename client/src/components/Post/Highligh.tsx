'use client'

import Image from "next/image";
import { motion } from 'framer-motion'

interface PostProps {
    id: number;
    title: string;
    image?: any;
    description: string;
    about: string;
}
export function Highlight({ id, title, image, description, about }: PostProps) {
    let newUrlImage = 'http://localhost:1337' + image

    return (
        newUrlImage &&
        <div className={` w-full h-full text-black flex  relative items-end`}>
            <div className="z-10">
                <strong className="border bg-white px-2 py-0.5 text- mx-5">{about}</strong>
                <h1 className="bg-teal-900/90 text-white font-semibold  z-10 p-2 mx-5 mb-3">{title}</h1>
            </div>
            <motion.img
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.5 },
                }}
                src={newUrlImage} className="absolute z-0 h-full w-full  " alt="Image" />
        </div>
    )
}