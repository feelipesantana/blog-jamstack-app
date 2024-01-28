import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
type GetMomentDayProps = {
  moment: string;
  dateFormatted: string
} 

export function getMomentDay():GetMomentDayProps{
  const currentTime = dayjs();
  const currentTimeFormatted = dayjs().format("DD/MM/YYYY HH:mm")
  const morningStartTime = dayjs().set('hour', 6).set('minute', 0).set('second', 0);
  const morningEndTime = dayjs().set('hour', 11).set('minute', 59).set('second', 0);

  const afternoonStartTime = dayjs().set('hour', 12).set('minute', 0).set('second', 0);
  const afternoonEndTime = dayjs().set('hour', 17).set('minute', 59).set('second', 0);

  const nightStartTime = dayjs().set('hour', 18).set('minute', 0).set('second', 0);
  const nightEndTime = dayjs().set('hour', 5).set('minute', 59).set('second', 0).add(1, 'day');

  if (currentTime.isAfter(morningStartTime) && currentTime.isBefore(morningEndTime)) return {moment: "Bom dia", dateFormatted: currentTimeFormatted };
  if (currentTime.isAfter(afternoonStartTime) && currentTime.isBefore(afternoonEndTime)) return  {moment: "Boa tarde", dateFormatted: currentTimeFormatted }
  if (currentTime.isAfter(nightStartTime) || currentTime.isBefore(nightEndTime)) return  {moment: "Boa noite", dateFormatted: currentTimeFormatted }
  
  return {moment: " ", dateFormatted: "" }
}