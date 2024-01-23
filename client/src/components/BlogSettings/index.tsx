'use client'
import { useModal } from "@/hook/useModal"

export function BlogSetting() {
    const { open, setState } = useModal()
    return (
        <div className=" w-52 bg-slate-300/90 absolute top-32 left-10 shadow-md rounded-lg backdrop-blur-md ">
            <h1 className="text-center font-semibold p-4">Settings</h1>

            <ul>
                <li className="text-center px-4 py-2 transition duration-300 hover:bg-slate-600 cursor-pointer hover:text-white " onClick={() => setState(true)}>Criar um Post</li>
                <li className="text-center px-4 py-2 transition duration-300 hover:bg-slate-600 cursor-pointer hover:text-white">Atualizar um Post</li>
                <li className="text-center px-4 py-2 transition duration-300 hover:bg-slate-600 cursor-pointer hover:text-white">Deletar um Post</li>
                <li className="text-center px-4 py-2 transition duration-300 hover:bg-slate-600 cursor-pointer hover:text-white">Infos</li>
            </ul>
        </div>
    )
}