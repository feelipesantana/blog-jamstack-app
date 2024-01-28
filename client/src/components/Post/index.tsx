'use client'
import { DELETE_POST } from "@/graphql/delete-post";
import { GET_POSTS } from "@/graphql/get-posts";
import { useControlDelete } from "@/hook/useControlDelete";
import { useMutation } from "@apollo/client";
import { X } from "lucide-react";
import { toast } from "react-toastify";
interface PostProps {
    id: number;
    title: string;
    image?: any;
    description: string;
    about: string;
}
export default function Post({ id, title, about, image, description }: PostProps) {
    const { deleteState } = useControlDelete()

    let newUrlImage = 'http://localhost:1337' + image


    const [mutateFunctionDelete, { data, loading, error }] = useMutation(DELETE_POST, {
        variables: { id: id },
        refetchQueries: [
            GET_POSTS,
        ],
    });

    async function handleDelete(e: Event) {
        e.preventDefault()
        await mutateFunctionDelete()

        if (!loading) {
            toast("Post Deletado !")
        }

    }
    return (
        <div className=" ">
            <div style={{ backgroundImage: `url(${newUrlImage})` }} className={` bg-contain bg-no-repeat w-full h-40 relative `}>
                {deleteState &&
                    <button className="absolute top-0 right-0 bg-red-600 p-1 m-2 rounded shadow-md" type="submit" onClick={(e: any) => handleDelete(e)}> <X className="text-white" /></button>
                }
            </div>
            <p>{title}</p>
        </div>
    )
}