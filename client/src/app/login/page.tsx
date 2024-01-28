import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect, } from "next/navigation";


export default async function Login() {

    const { isAuthenticated } = getKindeServerSession()
    const isAuth = await isAuthenticated()
    console.log(isAuth)
    if (isAuth) {
        redirect("/")
    }
    return (
        <div className="w-full h-full border flex flex-col gap-2 justify-center items-center">
            <h1 className="text-[clamp(3.25rem,6vw,6rem)]">
                Faça Login
            </h1>
            <h2 className="text-[clamp(0.1rem,2.2vw,3.15rem)] text-center font-medium w-[40rem]">
                O melhor canal com conteúdo sobre poker é aqui!
            </h2>

        </div>


    )
}