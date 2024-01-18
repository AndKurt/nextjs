"use client";
import React, { FC, useRef, useState } from "react";

import { VideoButton } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const VideoPlayer: FC<TProps> = ({ videoLink, poster }) => {
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
                poster={poster}
                preload='none'
                ref={videoRef}
                onEnded={handleEnded}
            >
                <source
                    src={videoLink}
                    type='video/mp4'
                />
            </video>
        </>
    );
};
