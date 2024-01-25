'use client'
import { useModal } from "@/hook/useModal"
import { CreatePostModal } from "./Modals/CreatePostModal"

export function ControlModal() {
    const { open } = useModal()
    return (
        open && <CreatePostModal />
    )
}