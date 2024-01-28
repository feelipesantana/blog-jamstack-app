import Link from "next/link"
import { format } from "date-fns";

import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { HeaderLink } from "./HeaderLink";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Header() {


    const { getUser, isAuthenticated } = getKindeServerSession();
    const auth = await isAuthenticated()
    const user = await getUser()


    // const moment = getMomentDay()

    // console.log("AQUi", moment)
    return (
        <div className="relative z-10 flex items-center justify-between p-6 bg-white/20 backdrop:filter backdrop:blur-lg">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="font-bold text-[clamp(1rem,1vw,2rem)]">Poker Prime</h1>
                </Link>
                {auth &&
                    <ul className="flex ml-10 gap-1">
                        <HeaderLink title="BSOP" />
                        <HeaderLink title="LAPT" />
                        <HeaderLink title="SUPREMA" />
                        <HeaderLink title="POKERSTARS" />
                        <HeaderLink title="888PPOKER" />
                        <HeaderLink title="GGPOKER" />
                    </ul>
                }

            </div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold"> {user?.given_name}</span>
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