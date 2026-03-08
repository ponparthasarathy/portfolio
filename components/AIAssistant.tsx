"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTION_REACTIONS: Record<string, string> = {
    home: "SCANNING_COSMIC_ENVIRONMENT... STATUS: CALM",
    about: "ACCESSING_BIOMETRIC_DATA... ROLE: SOFTWARE_ENGINEER",
    skills: "PARSING_TECH_STACK... DETECTING: HIGH_EXPERTISE",
    projects: "LOADING_PROJECT_DECK... STATUS: INTERACTIVE",
    profiles: "SYNCING_EXTERNAL_SENSORS... PLATFORMS: CONNECTED",
    contact: "INITIALIZING_COMMUNICATION_LINK... READY",
};

const AIAssistant = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [logs, setLogs] = useState<string[]>(["SYSTEM_ONLINE", "AWAITING_INPUT"]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(SECTION_REACTIONS);
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        if (activeSection !== section) {
                            setActiveSection(section);
                            setLogs((prev) => [...prev.slice(-4), SECTION_REACTIONS[section]]);
                        }
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <motion.div
            drag
            dragConstraints={{ left: -1000, right: 0, top: -1000, bottom: 0 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileDrag={{ scale: 1.05, zIndex: 100 }}
            className="!fixed bottom-10 right-10 z-[80] w-64 glass-card rounded-xl overflow-hidden border-white/10 shadow-3xl bg-black/60 backdrop-blur-xl hidden lg:block cursor-grab active:cursor-grabbing"
        >
            {/* Terminal Header */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/30" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                    <div className="w-2 h-2 rounded-full bg-green-500/30" />
                </div>
                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">AI_CONSOLE v1.0</span>
            </div>

            <div className="p-4 font-mono text-[10px] space-y-2">
                {logs.map((log, i) => (
                    <div key={i} className="flex gap-2">
                        <span className="text-indigo-500">{">"}</span>
                        <span className={i === logs.length - 1 ? "text-indigo-400" : "text-white/20"}>
                            {log}
                        </span>
                    </div>
                ))}
                <div className="flex gap-2 items-center">
                    <span className="text-indigo-500">{">"}</span>
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-1.5 h-3 bg-indigo-500"
                    />
                </div>
            </div>

            {/* Matrix-like stats */}
            <div className="border-t border-white/5 px-4 py-2 flex justify-between text-[8px] font-mono text-white/10">
                <span>LATENCY: 12ms</span>
                <span>Uptime: 99.9%</span>
            </div>
        </motion.div>
    );
};

export default AIAssistant;
