import { create } from "zustand";

interface Props{
    open: boolean
    setState: (value: boolean) => void
}

export const useModal = create<Props>((set) =>({
    open:false,
    setState: (value) => set(() =>({open : value}))
}));