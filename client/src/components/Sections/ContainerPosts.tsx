import { PostTypes, getPageData } from "@/api/get-page-data"
import { PostHighlight } from "../Post/PostHighlight"
import Post from "../Post"

interface ContainerPostsProps {
    posts: PostTypes[]
}
export function ContainerPosts({ posts }: ContainerPostsProps) {
    console.log("here", posts)
    return (
        <div className="grid grid-cols-4 gap-3 w-full h-full">
            {posts && posts.map((post) => {
                return <Post id={post.id} title={post.title} description={post.subtitle} image={post.image.data.attributes.url} key={post.id} />
            })}
        </div>
    )


}