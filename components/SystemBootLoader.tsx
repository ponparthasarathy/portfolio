"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
    { text: "INITIALIZING COSMIC_DECK v1.0.4...", delay: 100 },
    { text: "MOUNTING CORE_MODULES [OK]", delay: 400 },
    { text: "CALIBRATING STARFIELD_ENGINE...", delay: 700 },
    { text: "SYNCING SKILLS_constellation...", delay: 1000 },
    { text: "LOADING PROJECT_DECK [SUITS: SPADES, HEARTS]...", delay: 1300 },
    { text: "ESTABLISHING ENCRYPTED_CHANNEL...", delay: 1600 },
    { text: "ALL SYSTEMS NOMINAL. BOOTING...", delay: 1900 },
];

const SystemBootLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        bootLogs.forEach((log, index) => {
            setTimeout(() => {
                setVisibleLogs(prev => [...prev, log.text]);
            }, log.delay);
        });

        const progressTimer = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + 1 : 100));
        }, 20);

        const endTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearInterval(progressTimer);
            clearTimeout(endTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-[#0A0B10] flex flex-col items-center justify-center p-6 font-mono"
        >
            <div className="w-full max-w-md space-y-8">
                {/* Terminal Window */}
                <div className="w-full border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md shadow-2xl">
                    <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-indigo-500/50" />
                        </div>
                        <span className="text-[8px] text-white/30 uppercase tracking-widest">System_Boot_Manager</span>
                    </div>

                    <div className="p-6 h-48 overflow-y-auto no-scrollbar flex flex-col gap-1.5">
                        {visibleLogs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[10px] md:text-xs text-indigo-400/80"
                            >
                                <span className="text-white/20 mr-2">{">"}</span>
                                {log}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-indigo-500/50 mt-1"
                        />
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/20">
                        <span>Loading_Assets</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="h-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 md:left-20 text-[8px] text-white/10 uppercase tracking-[0.5em]">
                Elite_UI // Restoration_Protocol
            </div>
        </motion.div>
    );
};

export default SystemBootLoader;
