import Link from "next/link"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { HeaderLink } from "./HeaderLink";
import { getHeaderData } from "@/api/get-header-data";
import { getMomentDay } from "@/utils/get-moment-day";
import { CloudSun, MoonStar, SunMoon } from "lucide-react";
import { AccuracyTime } from "../AccuracyTime";


export async function Header() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const auth = await isAuthenticated()
    const user = await getUser()

    const headerData = await getHeaderData()
    const getMoment = getMomentDay()

    const logo = headerData.data.attributes.logo

    const headerBgColor = headerData.data.attributes.bg_color
    const headerTextColor = headerData.data.attributes.text_color

    return (
        <div style={{ backgroundColor: `${headerBgColor}b2`, color: `${headerTextColor}` }} className={` bg-white/40 relative z-10 flex items-center justify-between p-6  backdrop:filter backdrop:blur-lg`}>
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="font-bold text-[clamp(1rem,1vw,2rem)]">{logo}</h1>
                </Link>
                {auth &&
                    <ul className="flex ml-10 gap-1">
                        {headerData.data.attributes.link.map(res => {
                            return <HeaderLink title={res.name} url={res.url} key={res.id} />
                        })}
                    </ul>
                }

            </div>
            <div className="flex gap-2 items-center ">
                {getMoment &&
                    <div className="flex gap-1 items-center justify-center">
                        <span> Olá {user?.given_name}, </span>
                        <span>{getMoment.moment}</span>
                        <span>
                            {getMoment.icon === "SunMoon"
                                ? <SunMoon />
                                : getMoment.icon === "CloudSun"
                                    ? <CloudSun className="h-4 w-4 mb-4" />
                                    : <MoonStar />
                            }
                        </span>
                    </div>
                }
                <AccuracyTime />

                {auth
                    ? <LogoutLink><button className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">Sair</button></LogoutLink>
                    : (<div className="flex gap-2 ">
                        <LoginLink className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">
                            Entrar
                        </LoginLink>
                        <RegisterLink className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">
                            Registrar se
                        </RegisterLink>
                    </div>
                    )
                }
            </div>

        </div >
    )
}