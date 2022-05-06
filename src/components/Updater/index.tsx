import React, { useEffect, useState } from "react";
import { useSetting } from "../../hooks/settings";

export function Updater({update}) {

    const {appTheme, idiom} = useSetting();

    useEffect(() => {
        update(old => !old);
    }, [appTheme, idiom])

    return(<></>);
}