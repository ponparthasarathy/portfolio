"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
    "INITIALIZING_COSMIC_CORE... [OK]",
    "LOADING_PROJECT_MODULES... 100%",
    "ATTACHING_STARDUST_RENDERER... DONE",
    "ESTABLISHING_NEURAL_LINK... SUCCESS",
    "BYPASSING_GRAVITY_FILTERS... ACTIVE",
    "PON_PARTHASARATHY_OS v1.0.4",
    "SYSTEM_STATUS: NOMINAL",
    "WELCOME_COMMANDER",
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < BOOT_LOGS.length) {
            const timeout = setTimeout(() => {
                setLogs((prev) => [...prev, BOOT_LOGS[index]]);
                setIndex(index + 1);
            }, index === 0 ? 500 : Math.random() * 150 + 30); // Faster, snappier
            return () => clearTimeout(timeout);
        } else {
            const finalTimeout = setTimeout(onComplete, 1000);
            return () => clearTimeout(finalTimeout);
        }
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-[#0A0B10] flex items-center justify-center p-6"
            style={{ fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace' }}
        >
            <div className="max-w-md w-full">
                <div className="bg-black/40 border border-white/5 rounded-t-lg px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[10px] text-white/20 ml-2 font-mono tracking-widest uppercase">zsh</span>
                </div>

                <div className="bg-black/60 border-x border-b border-white/5 rounded-b-lg p-6 space-y-1">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[11px] md:text-[13px] tracking-normal flex gap-2"
                        >
                            <span className="text-[#A78BFA] opacity-70">➜</span>
                            <span className={i === logs.length - 1 ? "text-white" : "text-white/50 text-[11px]"}>
                                {log}
                            </span>
                        </motion.div>
                    ))}
                    {index < BOOT_LOGS.length && (
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-1.5 h-3.5 bg-[#A78BFA] inline-block ml-6 align-middle"
                        />
                    )}
                </div>

                <div className="mt-8 px-1">
                    <div className="w-full h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.2, ease: "linear" }}
                            className="absolute h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
