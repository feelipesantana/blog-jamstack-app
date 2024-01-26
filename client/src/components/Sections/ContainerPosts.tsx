import { PostTypes, getPageData } from "@/api/get-page-data"
import { PostHighlight } from "../Post/PostHighlight"
import Post from "../Post"
import Link from "next/link"

interface ContainerPostsProps {
    posts: PostTypes[]
}
export function ContainerPosts({ posts }: ContainerPostsProps) {
    return (
        <div className="grid grid-cols-4 gap-3 w-full h-full">
            {posts && posts.map((post) => {
                return (
                    <Link href={{ pathname: '/post', query: { id: post.id } }} key={post.id}>
                        <Post id={post.id} title={post.title} description={post.subtitle} image={post.image.data.attributes.url} key={post.id} />
                    </Link>
                )
            })}
        </div>
    )


}