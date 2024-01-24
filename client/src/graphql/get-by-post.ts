import { gql } from "@apollo/client"


interface ImageAttributes {
    url: string;
  }
  
interface ImageData {
    attributes: ImageAttributes;
}
interface PostAttributes {
    title: string;
    description: string;
    image:{
        data:ImageData
    }
  }
  
  interface PostData {
    id: string;
    attributes: PostAttributes;
  }
  
  interface Post {
    data: PostData;
  }
  
  export interface GetByPostType {
    post: Post;
  }
  
  
export const GET_BY_POST = gql`
    query ($id: ID){
        post(id: $id){
            data{
                id
                attributes{
                    title
                    description
                    image{
                        data{
                            id
                            attributes{
                                url
                            }
                        }
                        
                    }
                
                }
            }
            
        }
    }
`
   
