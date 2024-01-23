import { useModal } from "@/hook/useModal";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export function CreatePostModal() {
    const { setState } = useModal()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full bg-gray-500/70 absolute z-20 flex items-center justify-center" >

            <motion.div
                initial={{ scale: 0.9 }}
                exit={{ opacity: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                className="bg-white p-5  max-w-[40rem] w-full  rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-lg font-bold">Criar um Conteúdo</h1>
                        <h2>Faça um post no nosso blog</h2>
                    </div>
                    <button className="w-4 h-4 text-black" onClick={() => setState(false)}><X /></button>
                </div>
                <div className="mt-4">
                    <form className="flex flex-col gap-4 ">
                        <div className="flex flex-col ">
                            <label>Título</label>
                            <input type="text" className="h-10 border border-zinc-300  p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label>Descrição</label>
                            <input type="text" className="h-10 border border-zinc-300  p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label>Imagem</label>
                            <input type="file" className="h-10 border border-zinc-300  p-2 rounded-md" />
                        </div>

                        <div className="flex gap-10 items-center">
                            <button className="bg-green-700 text-white px-4 py-2 w-full rounded-md transition duration-300 hover:bg-green-800" >Postar</button>
                            <button className="w-full   px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 hover:text-white ">Cancel</button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    )
}