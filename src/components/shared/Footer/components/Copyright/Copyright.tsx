import React from "react";

import { Text } from "@/components/core";

import cn from "./styles.module.scss";

export const Copyright = () => {
    return (
        <div className={cn.copyright}>
            <Text color='content'>
                Copyright © Properland | Designed by{" "}
                <Text
                    color='primary'
                    tag='span'
                >
                    VictorFlow
                </Text>
                - Powered by{" "}
                <Text
                    color='primary'
                    tag='span'
                >
                    Webflow.
                </Text>
            </Text>
        </div>
    );
};
