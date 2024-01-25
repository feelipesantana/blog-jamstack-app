
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Post from "@/components/Post";
import { useModal } from "@/hook/useModal";
import { useQuery } from "@apollo/client";
import { Header } from "@/components/Header";
import { BlogSetting } from "@/components/BlogSettings";
import { PostHighlight } from "@/components/Post/PostHighlight";
import { CreatePostModal } from "@/components/Modals/CreatePostModal";
import { GET_POSTS, PostQueryResponse } from "@/graphql/get-posts";
import { Highlight } from "@/components/Sections/Highlight";
import { getPageData } from "@/api/get-page-data";
import { ContainerPosts } from "@/components/Sections/ContainerPosts";

export default async function Home() {
  // const { open } = useModal()
  // const { data } = useQuery<PostQueryResponse>(GET_POSTS)

  // const highlighItems = data?.posts.data.filter(res => res.attributes.highlight === true)
  // const noHighlighItems = data?.posts.data.filter(res => res.attributes.highlight === false)
  // const baseSession1 = data?.posts.data.filter(res => res.attributes.session.__typename === "")

  const pageData = await getPageData()

  const findHomePage = pageData.data.find(res => res.attributes.name = "Home Page")


  return (
    <div className={`w-full flex flex-col gap-4`}>

      {/*Session Highligh/Live/Online*/}
      {findHomePage?.attributes.session.map(session => {

        console.log(session)
        if (session.__component === 'blocks.highlight') {
          return (
            <Highlight posts={session.posts} key={session.id} />
          )
        }
        return (
          <ContainerPosts posts={session.posts} key={session.id} />
        )

      })}

      {/* 
      {highlighItems?.map(res => {
        return (
          <Link href={{ pathname: '/post', query: { id: res.id } }} className="col-span-2  rounded  w-full" key={res.id}>
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
      {open && <CreatePostModal />}
      <ToastContainer position={"bottom-right"} /> */}

    </div>
  );
}
