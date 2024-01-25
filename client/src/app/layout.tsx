import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ApolloClientProvider } from "@/providers/ApolloClientProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;

}>) {


  return (
    <html lang="en">
      <body className={poppins.className}>

        <div className="flex flex-col h-screen  ">

          <Header />
          <main className="max-w-[990px] h-full mx-auto w-full my-20">
            <ApolloClientProvider>
              {children}
            </ApolloClientProvider>
          </main>

        </div>

      </body>
    </html>
  );
}
