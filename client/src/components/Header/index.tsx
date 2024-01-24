import Link from "next/link"

export function Header() {
    return (
        <div className="flex items-center p-6 bg-teal-950 text-white">
            <Link href="/"><h1 className="font-bold text-2xl">Poker Prime</h1></Link>
            <ul className="flex ml-10 gap-4">
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>BSOP</li></Link>
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>LAPT</li></Link>
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>SUPREMA</li></Link>
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>POKERSTARS</li></Link>
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>888PPOKER</li></Link>
                <Link href="#" className="font-medium rounded-md transition duration-300 p-2 hover:rounded-md hover:bg-teal-900/80  "><li>GGPOKER</li></Link>
            </ul>
        </div>
    )
}