import { PostTypes } from "@/api/get-page-data"
import Link from "next/link"
import Post from "../Post"
import { Highlight } from "../Post/Highligh"

interface SidePostProps {
    posts?: PostTypes[]
}
export function SidePost({ posts }: SidePostProps) {
    return (
        <div className="col-span-1 grid grid-rows-2 justify-between  gap-2">
            {posts && posts.map((post) => {
                return (
                    <Link href={{ pathname: '/post', query: { id: post.id } }} key={post.id} className="h-full border">
                        <Highlight id={post.id} title={post.title} about={post.about} description={post.subtitle} image={post.image.data.attributes.url} />
                    </Link>
                )
            })}
        </div>
    )
}