'use client'
import { MediaPlayEvent, MediaPlayer, MediaPlayingEvent, MediaProvider, PlayButton } from "@vidstack/react";
import { Pause, PauseCircle, Play, PlayCircle, PlaySquare } from "lucide-react";
import { useState } from "react";
interface MainVideoProps {
    urlVideo: string
}
export function MainVideo({ urlVideo }: MainVideoProps) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)

    // 2. request succeeded

    function onPlay(nativeEvent: MediaPlayEvent) {
        // request events are attached to media events
        const playRequestEvent = nativeEvent.request; // MediaPlayRequestEvent

        console.log(playRequestEvent)

        if (playRequestEvent) setIsPlaying(true)
    }

    function onPause(nativeEvent: MediaPlayEvent) {
        // request events are attached to media events
        const playRequestEvent = nativeEvent.request; // MediaPlayRequestEvent

        console.log(playRequestEvent)

        if (playRequestEvent) setIsPlaying(false)
    }

    function onPlaying(nativeEvent: MediaPlayingEvent) {
        // the event that triggered the media play request
        const origin = nativeEvent.originEvent; // e.g., PointerEvent

        // was this triggered by an actual person?
        const userPlayed = nativeEvent.isOriginTrusted;

        // equivalent to above
        const isTrusted = nativeEvent.originEvent?.isTrusted;

    }

    function onTouchMoveCapture(nativeEvent: MediaPlayingEvent) {
        // the event that triggered the media play request
        const origin = nativeEvent.originEvent; // e.g., PointerEvent

        // was this triggered by an actual person?
        const userPlayed = nativeEvent.isOriginTrusted;

        // equivalent to above
        const isTrusted = nativeEvent.originEvent?.isTrusted;

    }

    function onMouseOverCapture() {
        setShowPlayer(true)
    }
    function onMouseOutCapture() {
        setShowPlayer(false)
    }
    return (
        <MediaPlayer title="Sprite Fight"
            src={urlVideo}
            onPlaying={onPlaying}
            onMouseOverCapture={onMouseOverCapture}
            onMouseOutCapture={onMouseOutCapture}
            onPlay={onPlay}
            onPause={onPause}
            className="relative">
            {/* show when paused */}
            {/* <div className="media-can-play media-autoplay:bg-red-500 bg-white  opacity-100 " >play</div>
            <div className="media-paused opacity-0 media-autoplay:bg-red-500">
                play
            </div>

            {/* hide when paused  */}


            {/* hide when _not_ playing  */}
            {/* <div className="not-media-playing:opacity-100"> here</div> */}

            <PlayButton
                className={`
                    ${showPlayer ? "opacity-80 transition ease duration-200 bg-white/30 " : "opacity-0 transition ease duration-200 "}
                    rounded-lg
                    border-0  
                    outline-none 
                    data-[hocus]:transparent
                    p-2  
                    left-[50%] 
                    translate-x-[-50%] 
                    absolute z-10 
                    flex items-center justify-center 
                    hover:opacity-80
                    hover:bg-white/30
                  
                `}
            >
                {isPlaying ? <PauseCircle className="text-white w-20 h-20" /> : <PlayCircle className=" text-white w-20 h-20" />}

            </PlayButton>

            <MediaProvider />
        </MediaPlayer >
    )

}