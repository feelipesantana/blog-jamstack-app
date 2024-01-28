import { api } from "@/services/api"
import assert from "assert";
import qs from 'qs'
interface Link {
    id: number;
    url: string;
    name: string;
  }
  
  interface Attributes {
    logo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    link: Link[];
    bg_color:string | "white/40";
    text_color:string | "black";
  }
  
  interface Data {
    id: number;
    attributes: Attributes;
  }
  
  interface Meta {}
  
  interface ApiResponse {
    data: Data;
    meta: Meta;
  }
  
export async function getHeaderData(){
    // const paramsObject = qs.parse(query,{ignoreQueryPrefix:true})
    // const params = qs.stringify(paramsObject )

    const response = await api.get<ApiResponse>(`${process.env.NEXT_PUBLIC_URL_API}/api/header?populate=*`)
    return response.data
} 
