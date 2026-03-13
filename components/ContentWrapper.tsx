"use client";

import React from "react";
import CustomCursor from "./CustomCursor";
import CommandPalette from "./CommandPalette";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <CustomCursor />
            <CommandPalette />
            {children}
        </>
    );
};

export default ContentWrapper;
