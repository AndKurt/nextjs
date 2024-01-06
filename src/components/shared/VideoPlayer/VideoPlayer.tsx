import React, { useRef, useState } from "react";

import { VideoButton } from "@/components/core";
import introVideo from "@public/video/intro.mp4";

import cn from "./styles.module.scss";

export const VideoPlayer = () => {
    const [isPlay, setIsPlay] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayButton = () => setIsPlay(prev => !prev);

    const handlePlayVideo = () => {
        videoRef.current?.play();
        togglePlayButton();
    };
    const handlePauseVideo = () => {
        videoRef.current?.pause();
        togglePlayButton();
    };

    const handleEnded = () => {
        videoRef.current?.load();
        togglePlayButton();
    };

    return (
        <>
            <VideoButton
                isPlay={isPlay}
                onPause={handlePauseVideo}
                onPlay={handlePlayVideo}
            />
            <video
                className={cn.videoPlayer}
                poster='/video/intro-poster.png'
                preload='none'
                ref={videoRef}
                onEnded={handleEnded}
            >
                <source
                    src={introVideo}
                    type='video/mp4'
                />
            </video>
        </>
    );
};
