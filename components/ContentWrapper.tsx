"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";
import CustomCursor from "./CustomCursor";
import CommandPalette from "./CommandPalette";
import AIAssistant from "./AIAssistant";
import SystemProgressBar from "./SystemProgressBar";
import { useSound } from "../hooks/useSound";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { playThud } = useSound();

    useEffect(() => {
        if (!isLoading) {
            playThud(); // Sound cue when system is ready
        }
    }, [isLoading, playThud]);

    return (
        <>
            {/* Abduction Beam Sweep */}
            <AnimatePresence>
                {!isLoading && (
                    <motion.div
                        initial={{ top: "-100%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        className="fixed left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent z-[90] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <CustomCursor />
            <CommandPalette />
            <AIAssistant />
            <SystemProgressBar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default ContentWrapper;
