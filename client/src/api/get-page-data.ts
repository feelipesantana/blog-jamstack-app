import { api } from "@/services/api"
import assert from "assert";
import qs from 'qs'
export interface PostTypes {
    id: number;
    title: string;
    subtitle: string;
    article: string | null; 
    about:string;
    image:{
        data:{
            id:number
            attributes:{
                name:string;
                url: string;
                width: number
                height:number
            }
        }
    }
}
  
interface Session {
    id: number;
    __component: string;
    teste: any; // Adjust the type as needed
    posts: PostTypes[];
}

interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    slug: string | null;
    session: Session[];
}

export interface DataObject {
    id: number;
    attributes: Attributes;
}

export interface RootObject {
    data: DataObject[];

}
interface getPageDataProps{
    query:string
}
export async function getPageData({query}:getPageDataProps){
    const paramsObject = qs.parse(query,{ignoreQueryPrefix:true})
    const params = qs.stringify(paramsObject )

    const response = await api.get<RootObject>(`${process.env.NEXT_PUBLIC_URL_API}/api/pages?${params}`)
    return response.data
} 
