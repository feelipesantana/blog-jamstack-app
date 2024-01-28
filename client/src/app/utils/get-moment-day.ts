import { format, isAfter, isBefore } from "date-fns"


export function getMomentDay(){
    const date = new Date()

    const time = format(date, 'yyyy-MM-ddTHH:mm:ss')

    const currentTime = new Date(`2000-01-01T${time}`);
    
    const morningStartTime = new Date(`2000-01-01T06:00:00`)
    const morningEndTime = new Date(`2000-01-01T11:59:00`)

    const afternoonStartTime = new Date(`2000-01-01T12:00:00`)
    const afternoonEndTime = new Date(`2000-01-01T17:59:00`)

    const nightStartTime = new Date(`2000-01-01T18:00:00`)
    const nightEndTime = new Date(`2000-01-01T05:00:00`)

    console.log(time)
    const isMorningTime = isAfter(currentTime,morningStartTime ) && isBefore(currentTime,morningEndTime)
    const isAfternoonTime = isAfter(currentTime,afternoonStartTime ) && isBefore(currentTime,afternoonEndTime)
    const isNightTime = isAfter(currentTime,nightStartTime ) && isBefore(currentTime,nightEndTime)


    console.log(isMorningTime , isAfternoonTime, isNightTime)
    if(isMorningTime) return "Morning"

    if(isAfternoonTime) return "Afternoon"

    if(isNightTime) return "Night"
}