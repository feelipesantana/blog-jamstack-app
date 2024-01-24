'use client'
import { GET_BY_POST, GetByPostType } from "@/graphql/get-by-post"
import { useQuery } from "@apollo/client"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"

export default function Post() {

    const searchParams = useSearchParams()
    let value = searchParams.get('id')

    const { data } = useQuery<GetByPostType>(GET_BY_POST, {
        variables: { id: value }
    })

    let imageUrl = data?.post.data.attributes.image.data.attributes.url
    return (
        <div>
            <h1 className="text-4xl font-bold ">{data?.post.data.attributes.title}</h1>

            {data && imageUrl &&
                <Image src={imageUrl} width={700} height={700} alt="Image Post" className="mt-2" />
            }
            <p>{data?.post.data.attributes.description}</p>
        </div>
    )
}