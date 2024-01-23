
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const client = () => {
  const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      headers:{
        "Authorization":`Bearer ${process.env.NEXT_PUBLIC_TOKEN}` 
    }
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}