import { api } from "@/services/api"
import assert from "assert";
import qs from 'qs'
export interface PostTypes {
    id: number;
    title: string;
    subtitle: string;
    article: string | null; 
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
  
  interface Data {
    id: number;
    attributes: Attributes;
  }
  
  
  interface RootObject {
    data: Data[];

  }
  
export async function getPageData(){

    const query = "populate[session][populate][posts][populate][image][populate]=true";
    const paramsObject = qs.parse(query,{ignoreQueryPrefix:true})

    const params = qs.stringify(paramsObject )
    
    console.log(params)

    const response = await api.get<RootObject>(`${process.env.NEXT_PUBLIC_URL_API}/api/pages?${params}`)

    return response.data
} 
