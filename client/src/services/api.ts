import axios from "axios";
import { headers } from "next/headers";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    headers:{
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
})
