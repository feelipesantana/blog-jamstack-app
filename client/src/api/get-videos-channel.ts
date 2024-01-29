import { api } from "@/services/api"
import assert from "assert";
import qs from 'qs'



interface VideoAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: null | number;
    height: null | number;
    formats: null; // You might want to define a specific type for this
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null; // You might want to define a specific type for this
    createdAt: string;
    updatedAt: string;
  }
  
  interface VideoData {
    id: number;
    attributes: VideoAttributes;
  }
  
  interface PrincipalVideo {
    id: number;
    title: string;
    description: string;
    video: {
      data: VideoData;
    };
  }
interface Attributes {
    title: string;
    bg_color: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    principal_video: PrincipalVideo;
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
  
export async function getVideosChannel(){
    
    const query = qs.stringify(
        {
            populate: {
                principal_video:{
                    populate:{
                        video:{
                            populate:true
                        }
                    }
                }
            }
        }
    ) 
    
    const paramsObject = qs.parse(query,{ignoreQueryPrefix:true})
    const params = qs.stringify(paramsObject )

    try{
        const response = await api.get<ApiResponse>(`${process.env.NEXT_PUBLIC_URL_API}/api/videos-channel?${params}`)
        return response.data
    }catch(err){
        return null
    }
   
} 
