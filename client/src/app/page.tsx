'use client'
import { BlogSetting } from "@/components/BlogSettings";
import { Header } from "@/components/Header";
import { CreatePostModal } from "@/components/Modals/CreatePostModal";
import Post from "@/components/Post";
import { PostHighlight } from "@/components/Post/PostHighlight";
import { GET_POSTS, PostQueryResponse } from "@/graphql/get-posts";
import { useModal } from "@/hook/useModal";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { open } = useModal()
  const { data } = useQuery<PostQueryResponse>(GET_POSTS)

  const highlighItems = data?.posts.data.filter(res => res.attributes.highlight === true)
  const noHighlighItems = data?.posts.data.filter(res => res.attributes.highlight === false)

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 w-full border">

        {highlighItems?.map(res => {

          return (
            <Link href={{ pathname: '/post', query: { id: res.id } }} className="col-span-2 h-72  rounded  w-full " key={res.id}>
              <PostHighlight
                title={res.attributes.title}
                description={res.attributes.description}
                image={res.attributes.image.data.attributes.url} />
            </Link>
          )
        })}

        {noHighlighItems?.map(res => {
          return (
            <Link href={{ pathname: '/post', query: { id: res.id } }} className="col-span-1 rounded  w-full " key={res.id}>
              <Post
                title={res.attributes.title}
                description={res.attributes.description}
                image={res.attributes.image.data.attributes.url}
                id={res.id}
              />
            </Link>
          )
        })}
      </div>

      <BlogSetting />
      {open && <CreatePostModal />}
      <ToastContainer position={"bottom-right"} />
    </div >
  );
}
