import React, { CSSProperties, useEffect } from "react";

interface BasicProps {
    status: "loading" | "ready" | string;
    style?: CSSProperties;
    styleClass?: string;
}

export const Loading = ({ status, style, styleClass }: BasicProps) => {

    return (
        <div
            id="loading"
            style={style && style}
            className={`${status === "loading" ? "show" : "hide"} ${styleClass || ""}`}
        ></div >
    );
}
