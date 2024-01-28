import Link from "next/link"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { HeaderLink } from "./HeaderLink";
import { getHeaderData } from "@/api/get-header-data";
import { getMomentDay } from "@/utils/get-moment-day";
import { MoonStar } from "lucide-react";
import { Span } from "next/dist/trace";


export async function Header() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const auth = await isAuthenticated()
    const user = await getUser()

    const getData = await getHeaderData()
    const getMoment = getMomentDay()


    return (
        <div className="relative z-10 flex items-center justify-between p-6 bg-white/40 backdrop:filter backdrop:blur-lg">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="font-bold text-[clamp(1rem,1vw,2rem)]">Poker Prime</h1>
                </Link>
                {auth &&
                    <ul className="flex ml-10 gap-1">
                        {getData.data.attributes.link.map(res => {
                            return <HeaderLink title={res.name} url={res.url} key={res.id} />
                        })}
                    </ul>
                }

            </div>
            <div className="flex gap-10 items-center">
                <div className="flex flex-col items-center  border-black w-52">
                    <div className="font-semibold flex">
                        <span>Olá {user?.given_name},{' '} </span>

                        {getMoment.moment === "Boa noite" ? (<span className="flex">Boa noite <MoonStar className="w-4 h-4" /> </span>) : getMoment.moment}</div>
                    <strong className="font-base text-xs"> {getMoment.dateFormatted}</strong>
                </div>
                {auth
                    ? <LogoutLink><button className="">Log out</button></LogoutLink>
                    : (<div className="flex gap-2 ">
                        <LoginLink className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">
                            Sign in
                        </LoginLink>
                        <RegisterLink className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">
                            Sign up
                        </RegisterLink>
                    </div>
                    )
                }
            </div>

        </div>
    )
}