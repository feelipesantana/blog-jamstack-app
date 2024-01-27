
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Post from "@/components/Post";
import { useModal } from "@/hook/useModal";
import { useQuery } from "@apollo/client";
import { Header } from "@/components/Header";
import { BlogSetting } from "@/components/BlogSettings";
import { PostHighlight } from "@/components/Post/PostHighlight";
import { CreatePostModal } from "@/components/Modals/CreatePostModal";
import { GET_POSTS, PostQueryResponse } from "@/graphql/get-posts";
import { Highlight } from "@/components/Sections/Highlight";
import { getPageData } from "@/api/get-page-data";
import { ContainerPosts } from "@/components/Sections/ContainerPosts";
import { ControlModal } from "@/components/ControlModal";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

export const revalidate = 10;// Revalidate data Next

export default async function Home() {

  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated
  } = getKindeServerSession();

  const isAuth = await isAuthenticated()

  if (!isAuth) {
    redirect("/login")
  }

  const pageData = await getPageData({ query: "populate[session][populate][posts][populate][image][populate]=true" })

  console.log(pageData)
  const findHomePage = pageData.data.find(res => res.attributes.name = "Home Page")


  return (
    <div className={`w-full flex flex-col gap-4`}>

      {/*Session Highligh/Live/Online*/}
      {findHomePage?.attributes.session.map(session => {

        return (
          <div className="" key={session.id}>
            <div>

            </div>
          </div>
        )

      })}

      <ControlModal />
      <ToastContainer position={"bottom-right"} />

    </div>
  );
}
