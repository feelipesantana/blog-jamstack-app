'use client'
import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { gql, useQuery } from "@apollo/client";



const GET_POSTS = gql`
query{
  posts{
    data{
    	id
      attributes{
        Title
        Description
        Date
        Image{
          data{
            id
            attributes{
              formats
            }
          }
        }
        author{
          data{
            id
            attributes{
              Name
            }
          }
        }
      }
    }
  }
}
`;
export default function Home() {
  const { data } = useQuery(GET_POSTS)
  console.log()
  return (

    <div className="flex flex-col h-screen">
      <Header />
      <main className="max-w-[990px] border mx-auto border-red-500  w-full h-full pt-20 flex gap-16">
        {data?.posts.data.map(result => {
          console.log(result)
          return (
            <Post
              title={result.attributes.Title}
              description={result.attributes.Description}
            />)
        })}
        {/* <Post
          title={data.posts.data.attributes.title}
          description={data.posts.data.attributes.title}
          image={data.posts.data.attributes.image.data.attributes.formats} /> */}
      </main>
    </div>
  );
}
