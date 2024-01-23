

interface PostProps {
    title: string;
    image?: string;
    description: string;
}
export function Post({ title, description }: PostProps) {

    return (
        <div className={`w-full h-20 border border-gray-900 text-black`}>
            <h1 className="">Teste{title}</h1>
            <p>{description}</p>
        </div>
    )
}