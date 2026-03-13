"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants/data";
import { MagneticWrapper } from "./MagneticWrapper";

const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const mission = "I build intelligent systems and modern digital experiences.";

    useEffect(() => {
        let i = 0;
        const typingTimer = setInterval(() => {
            if (i < mission.length) {
                setTypedText(mission.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingTimer);
            }
        }, 50);

        return () => clearInterval(typingTimer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-indigo-400 font-medium tracking-widest uppercase text-xs md:text-sm mb-6"
                    >
                        Full Stack Software Engineer
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-indigo-300/50 leading-none"
                    >
                        Pon Parthasarathy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-2xl text-indigo-400/70 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-cursive"
                    >
                        {typedText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[2px] h-5 md:h-7 bg-indigo-400/60 ml-1 translate-y-1"
                        />
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <MagneticWrapper>
                            <motion.a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-indigo-600/10 border border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-600/20 rounded-lg font-mono text-sm transition-all shadow-[0_0_0_0_rgba(99,102,241,0)] hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                            >
                                <span className="text-indigo-500 font-bold">{">"}</span>
                                <span className="text-white/80 group-hover:text-white transition-colors">view-projects.exe</span>
                            </motion.a>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <motion.a
                                href="/resume.pdf"
                                download="resume.pdf"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-600/10 rounded-lg font-mono text-sm transition-all shadow-[0_0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                            >
                                <span className="text-cyan-500 font-bold">{"$"}</span>
                                <span className="text-white/80 group-hover:text-white transition-colors">download-resume.sh</span>
                            </motion.a>
                        </MagneticWrapper>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
