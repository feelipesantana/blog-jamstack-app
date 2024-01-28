import Link from "next/link"

interface HeaderLinkProps {
    title: string
    url: string
}
export function HeaderLink({ title, url }: HeaderLinkProps) {
    return (
        <Link href={url} className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80 hover:text-white "><li>{title}</li></Link>

    )
}