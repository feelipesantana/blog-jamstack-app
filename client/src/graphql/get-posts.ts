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
  session:{
    __typename:string
  }
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

query queryGetPost{
  posts{
    data{
      id
      attributes{
        session{
          __typename
        }
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