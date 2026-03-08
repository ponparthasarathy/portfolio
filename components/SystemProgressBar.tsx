"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SystemProgressBar = () => {
    const { scrollYProgress } = useScroll();

    // Smooth the scroll progress for the gauge
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 hidden lg:flex">
            <span className="text-[10px] font-mono text-indigo-500/50 vertical-text tracking-widest uppercase">
                Resource_Level
            </span>

            <div className="w-[4px] h-[300px] bg-white/5 rounded-full relative overflow-hidden border border-white/5">
                <motion.div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 via-cyan-400 to-white"
                    style={{ scaleY, originY: 1 }}
                />

                {/* Glow Overlay */}
                <motion.div
                    className="absolute bottom-0 w-full h-full bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    style={{ scaleY, originY: 1 }}
                />
            </div>

            <div className="font-mono text-[10px] text-white/40 tabular-nums">
                <motion.span>{0}</motion.span>
                <motion.span>
                    {percentage.get().toFixed(0)}
                </motion.span>
                <span className="text-indigo-500/50">%</span>
            </div>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </div>
    );
};

export default SystemProgressBar;
