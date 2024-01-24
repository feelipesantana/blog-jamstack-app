import { create } from "zustand";

interface useControlDeleteProps{
    deleteState: boolean
    setDeleteState: (value: boolean) => void
}
export const useControlDelete = create<useControlDeleteProps>((set) =>({
    deleteState:false,
    setDeleteState: (value) => set(() =>({deleteState: value}))
}))