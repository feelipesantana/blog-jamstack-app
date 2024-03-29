import Link from "next/link"
import { Highlight } from "../Post/Highligh"
import { PostTypes } from "@/api/get-page-data"

interface PrincipalPostProps {
    posts?: PostTypes[]

}
export function PrincipalPost({ posts }: PrincipalPostProps) {
    return (
        <div className="col-span-2 h-[28rem]">
            {posts && posts.map((post) => {
                return (
                    <Link href={{ pathname: '/post', query: { id: post.id } }} key={post.id} className="h-full">
                        <Highlight id={post.id} title={post.title} about={post.about} description={post.subtitle} image={post.image.data.attributes.url} />
                    </Link>
                )
            })}
        </div>
    )
}