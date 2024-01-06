import React, { FC } from "react";

import { SectionTitle, VideoPlayer } from "@/components";
import { Text, Title } from "@/components/core";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const Intro: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.intro}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <div className={cn.introInfoContainer}>
                        <SectionTitle
                            sectionNumber={sectionNumber}
                            title={sectionTitle}
                        />
                        <Title>{commonTitle}</Title>
                        <Text>
                            Distinctively re-engineer revolutionary meta-services and premium At
                            vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias excepturi.
                        </Text>
                    </div>
                    <div className={cn.videoContainer}>
                        <VideoPlayer />
                    </div>
                </div>
            </div>
        </section>
    );
};
