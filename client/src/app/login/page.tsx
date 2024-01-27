import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Login() {

    const { isAuthenticated } = getKindeServerSession()
    const isAuth = await isAuthenticated()
    console.log(isAuth)
    if (isAuth) {
        redirect("/")
    }
    return (
        <>
            <LoginLink>
                <button>Sign in</button>

            </LoginLink>

            <RegisterLink>Sign up</RegisterLink>
        </>

    )
}