'use client'
import { client } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { ReactNode } from "react";

export function ApolloClientProvider({ children }: { children: ReactNode }) {
    return (
        <ApolloNextAppProvider makeClient={client}>
            {children}
        </ApolloNextAppProvider>

    )
}