import Link from "next/link"

interface HeaderLinkProps {
    title: string
}
export function HeaderLink({ title }: HeaderLinkProps) {
    return (
        <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80 hover:text-white "><li>{title}</li></Link>

    )
}