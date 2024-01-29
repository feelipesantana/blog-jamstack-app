import { getVideosChannel } from "@/api/get-videos-channel"
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, PlayButton } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { PlaySquare, Tv } from "lucide-react";
import { MainVideo } from "./MainVideo";

export async function VideosChannel() {

    const videosChannel = await getVideosChannel()

    let principalVideo: string = "http://localhost:1337" + videosChannel?.data.attributes.principal_video.video.data.attributes.url
    console.log(principalVideo)
    return (
        <div style={{ backgroundColor: videosChannel?.data.attributes.bg_color }} className="p-10 my-10 rounded-md">
            <h1 className="text-3xl text-black mb-6 flex items-center justify-center  gap-2">
                {videosChannel?.data.attributes.title} <Tv className="w-8 h-8 mb-1" />
            </h1>

            {principalVideo && <MainVideo urlVideo={principalVideo} />}

            <h2 className="text-lg text-slate-600 mb-2">{videosChannel?.data.attributes.principal_video.title}</h2>
        </div>
    )
}