import Image from "next/image";
import React, { FC } from "react";

import { VIDEO_BUTTON } from "@public";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const VideoButton: FC<TProps> = ({ isPlay, onPause, onPlay }) => {
    return (
        <div
            className={clsx(cn.videoButton, cn.aligner, isPlay && cn.hideButton)}
            onClick={isPlay ? onPause : onPlay}
        >
            <div className={cn.aligner}>
                <div className={cn.aligner}>
                    <Image
                        alt='video-button'
                        height={20}
                        src={isPlay ? VIDEO_BUTTON.pause : VIDEO_BUTTON.play}
                        width={20}
                    />
                </div>
            </div>
        </div>
    );
};
