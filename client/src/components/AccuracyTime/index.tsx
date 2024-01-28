'use client'
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import { Popover, Transition } from '@headlessui/react'

import { useEffect, useState } from "react"

dayjs.extend(utc)

export function AccuracyTime() {
    const [currentTime, setCurrentTime] = useState(dayjs())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const formattedTime = currentTime.format("dd/mm/YYYY HH:mm:ss")

    return (
        <Popover className="relative">
            <Popover.Button className="rounded-md p-2 transition duration-300 hover:bg-slate-300/40">Hoje é</Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="bg-white/80 p-2 mt-10 absolute z-10 text-xs text-zinc-500 rounded-lg text-center">
                    {formattedTime}
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}