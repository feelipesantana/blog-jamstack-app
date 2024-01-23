'use client'
import { Header } from "@/components/Header";
import Post from "@/components/Post";
import { PostHighlight } from "@/components/Post/PostHighlight";
import { GET_POSTS, PostQueryResponse } from "@/graphql-queries/get-posts";
import { useQuery } from "@apollo/client";






export default function Home() {
  const { data } = useQuery<PostQueryResponse>(GET_POSTS)

  const highlighItems = data?.posts.data.filter(res => res.attributes.highlight === true)
  const noHighlighItems = data?.posts.data.filter(res => res.attributes.highlight === false)


  return (

    <div className="flex flex-col ">
      <Header />
      <main className="max-w-[990px] mx-auto  w-full h-full pt-20 flex ">
        <div className="grid grid-cols-4 gap-2 w-full border">

          {highlighItems?.map(res => {

            return (
              <div className="col-span-2 h-72  rounded  w-full ">
                <PostHighlight
                  title={res.attributes.title}
                  description={res.attributes.description}
                  image={res.attributes.image.data.attributes.url} />
              </div>
            )
          })}

          {noHighlighItems?.map(res => {

            return (
              <div className="col-span-1 min-h-72  rounded  w-full ">
                <Post
                  title={res.attributes.title}
                  description={res.attributes.description}
                  image={res.attributes.image.data.attributes.url} />
              </div>
            )
          })}

          {/* {data?.posts.data.map(res => {

            let newURlImage = 'http://localhost:1337' + res.attributes.image.data.attributes.url
            if (res.attributes.highlight) {
              return (
                <div className="min-h-72 border border-blue-500 rounded  w-full ">
                  <POstHighlight
                    title={res.attributes.title}
                    description={res.attributes.description}
                    image={newURlImage} />
                </div>
              )

            } else {
              return (
                <div className="h-52 border border-pink-500 rounded  w-full">
                  <Post
                    title={res.attributes.title}
                    description={res.attributes.description}
                    image={newURlImage}
                  />
                </div>
              )
            } */}
        </div>

        {/* <Post
          title={data.posts.data.attributes.title}
          description={data.posts.data.attributes.title}
          image={data.posts.data.attributes.image.data.attributes.formats} /> */}
      </main >
    </div >
  );
}
