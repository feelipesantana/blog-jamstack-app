'use client'
import qs from 'qs'
import Image from "next/image"

import { DataObject, getPageData } from "@/api/get-page-data"
import { GET_BY_POST, GetByPostType } from "@/graphql/get-by-post"
// import { useQuery } from "@apollo/client"
import { usePathname, useSearchParams } from "next/navigation"
import { useQuery } from '@tanstack/react-query'

export default function Post() {

    const searchParams = useSearchParams()
    let id = searchParams.get('id')

    const query = qs.stringify(
        {
            populate: {
                session: {
                    populate: {
                        posts: {
                            populate: {
                                image: {
                                    populate: true
                                }
                            },
                            filters: {
                                id: {
                                    $eq: id
                                },

                            },


                        }
                    }

                },
            },
        },
    )

    const { data: pageData } = useQuery({
        queryKey: ['an'],
        queryFn: () => getPageData({ query })
    })


    const handleFind = (data: DataObject[] | undefined, postId: number) => {
        if (!data || !postId) return

        for (const value of data) {
            for (const session of value.attributes.session) {
                const post = session.posts.find(post => post.id === postId);
                if (post) {
                    return post;
                }
            }
        }
        return undefined;
    };

    const data = handleFind(pageData?.data, Number(id))
    // const { data } = useQuery<GetByPostType>(GET_BY_POST, {
    //     variables: { id: value }
    // })

    let imageUrl = "http://localhost:1337" + data?.image.data.attributes.url
    return (
        <div className="w-[700px] mx-auto">
            <h1 className="text-4xl font-bold ">{data?.title}</h1>

            {data && imageUrl &&
                <Image src={imageUrl} width={700} height={700} alt="Image Post" className="mt-10" />
            }
            <p className="py-10 text-xl">{data?.article}</p>
        </div>
    )
}