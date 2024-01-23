import { useState } from "react";



interface PostProps {
    title: string;
    image?: any;
    description: string;
}
export default function Post({ title, image, description }: PostProps) {
    let newUrlImage = 'http://localhost:1337' + image
    return (
        <div className="h-full">
            <div style={{ backgroundImage: `url(${newUrlImage})` }} className={` bg-cover h-full`}></div>
            <p>{title}</p>
        </div>
    )
}