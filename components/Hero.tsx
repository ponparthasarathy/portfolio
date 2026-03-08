"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants/data";
import { MagneticWrapper } from "./MagneticWrapper";

const Hero = () => {
    const [coords, setCoords] = useState({ lat: "28.6139", long: "77.2090" });
    const [uptime, setUptime] = useState("00:00:00");
    const [typedText, setTypedText] = useState("");
    const mission = "I build intelligent systems and modern digital experiences.";

    useEffect(() => {
        const timer = setInterval(() => {
            // Subtle coordinate shifting
            setCoords({
                lat: (28.6139 + (Math.random() - 0.5) * 0.001).toFixed(4),
                long: (77.2090 + (Math.random() - 0.5) * 0.001).toFixed(4),
            });

            // Uptime simulation
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            setUptime(`${h}:${m}:${s}`);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let i = 0;
        const typingTimer = setInterval(() => {
            if (i < mission.length) {
                setTypedText(mission.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingTimer);
            }
        }, 50); // 50ms per character for a fast, techy speed

        return () => clearInterval(typingTimer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* System Readouts - Corners (Hidden on Mobile) */}
            <div className="absolute inset-0 pointer-events-none p-6 md:p-10 z-0 hidden sm:block">
                {/* Top Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-10 left-10 font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase"
                >
                    <div className="flex flex-col gap-1">
                        <span>Status: Operational</span>
                        <span>Uptime: {uptime}</span>
                        <div className="w-12 h-[1px] bg-white/10 mt-1" />
                    </div>
                </motion.div>

                {/* Top Right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-10 right-10 font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase text-right"
                >
                    <div className="flex flex-col gap-1">
                        <span>LAT: {coords.lat}</span>
                        <span>LONG: {coords.long}</span>
                        <span className="text-indigo-500/40">Signal: Strong</span>
                    </div>
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-10 left-10 font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase"
                >
                    <div className="flex flex-col gap-1">
                        <span>Link: Encrypted_X2</span>
                        <span>Packet_Loss: 0.00%</span>
                        <div className="flex gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-1 h-1 bg-white/10 rounded-full" />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-10 right-10 font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase text-right"
                >
                    <div className="flex flex-col gap-1">
                        <span>V_CORE: 1.0.4</span>
                        <span>Build: ELITE_UI_RESTORED</span>
                        <span className="animate-pulse text-indigo-500/40">● Recording...</span>
                    </div>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-indigo-400 font-medium tracking-widest uppercase text-xs md:text-sm mb-4">
                        Full Stack Software Engineer
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Pon Parthasarathy
                    </h1>
                    <p className="text-xl md:text-3xl text-indigo-400/80 max-w-3xl mx-auto mb-10 leading-relaxed font-cursive">
                        {typedText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-1 h-6 md:w-1 md:h-8 bg-indigo-500/50 ml-1 translate-y-1"
                        />
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <MagneticWrapper>
                            <motion.a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-lg font-mono text-sm transition-all"
                            >
                                <span className="text-indigo-500 font-bold">{">"}</span>
                                <span className="text-white/80 group-hover:text-white transition-colors">view-projects.exe</span>
                            </motion.a>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <motion.a
                                href="/resume.pdf"
                                download="resume.pdf"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan-500/50 rounded-lg font-mono text-sm transition-all"
                            >
                                <span className="text-cyan-500 font-bold">{"$"}</span>
                                <span className="text-white/80 group-hover:text-white transition-colors">download-resume.sh</span>
                            </motion.a>
                        </MagneticWrapper>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
