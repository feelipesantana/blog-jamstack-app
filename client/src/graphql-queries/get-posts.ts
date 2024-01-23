import { gql } from '@apollo/client';


interface ImageAttributes {
  id: string;
  attributes: {
    url:string
  };
}

interface PostAttributes {
  title: string;
  description: string;
  highlight:boolean;
  image: {
    data: ImageAttributes;
  };
}

interface PostData {
  id: string;
  attributes: PostAttributes;
}

export interface PostQueryResponse {
  posts: {
    data: PostData[];
  };
}

export const GET_POSTS = gql`

query{
  posts{
    data{
      id
      attributes{
        title
        description
        highlight
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


`;