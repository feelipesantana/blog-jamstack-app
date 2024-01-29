
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { getPageData } from "@/api/get-page-data";
import { ContainerPosts } from "@/components/Sections/ContainerPosts";
import { ControlModal } from "@/components/ControlModal";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { PrincipalPost } from "@/components/Sections/PrincipalPost";
import { SidePost } from "@/components/Sections/SidePost";
import { VideosChannel } from "@/components/VideosChannel";

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
  const findHomePage = pageData.data.find(res => res.attributes.name = "Home Page")

  const principalPost = findHomePage?.attributes.session.find(res => res.__component === "blocks.principal_post")
  const sidePosts = findHomePage?.attributes.session.find(res => res.__component === "blocks.side_posts")
  const containerPosts = findHomePage?.attributes.session.find(res => res.__component === "blocks.container_posts")

  return (
    <div className={`w-full flex flex-col gap-3`}>

      {/*Session Highligh/Live/Online*/}
      <div className="grid grid-cols-3 gap-3 ">
        <PrincipalPost posts={principalPost?.posts} />
        <SidePost posts={sidePosts?.posts} />
      </div>

      <div>
        <ContainerPosts posts={containerPosts?.posts} />
      </div>

      <VideosChannel />
      <ControlModal />

    </div >
  );
}
