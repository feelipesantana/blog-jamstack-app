import { PostTypes, getPageData } from "@/api/get-page-data"
import { PostHighlight } from "../Post/PostHighlight"

interface HighlightProps {
    posts: PostTypes[]
}
export function Highlight({ posts }: HighlightProps) {

    return (
        <div className="grid grid-cols-2 gap-3 w-full h-full">
            {posts && posts.map((post) => {
                return <PostHighlight title={post.title} description={post.subtitle} image={post.image.data.attributes.url} />
            })}
        </div>
    )


}