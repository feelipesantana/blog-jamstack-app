import Link from "next/link"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { HeaderLink } from "./HeaderLink";

export function Header() {




    return (
        <div className="flex items-center justify-between p-6 bg-white text-black">
            <div className="flex items-center">
                <Link href="/"><h1 className="font-extrabold text-2xl">Poker Prime</h1></Link>
                <ul className="flex ml-10 gap-1">
                    <HeaderLink title="BSOP" />
                    <HeaderLink title="LAPT" />
                    <HeaderLink title="SUPREMA" />
                    <HeaderLink title="POKERSTARS" />
                    <HeaderLink title="888PPOKER" />
                    <HeaderLink title="GGPOKER" />
                </ul>
            </div>
            <LogoutLink>Log out</LogoutLink>
        </div>
    )
}