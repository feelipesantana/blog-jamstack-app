

interface PostProps {
    title: string;
    image?: any;
    description: string;
}
export function PostHighlight({ image, title, description }: PostProps) {
    let newUrlImage = 'http://localhost:1337' + image
    return (
        newUrlImage &&
        <div style={{ backgroundImage: `url(${newUrlImage})` }} className={` w-full h-full text-black flex items-end`}>
            <h1 className="bg-teal-900/90 text-white font-semibold p-2 ">{title}</h1>
        </div>
    )
}