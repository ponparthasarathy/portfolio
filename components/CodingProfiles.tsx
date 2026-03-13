"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
    {
        name: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/ponparthasarathy",
        stats: "50+ Repositories",
        color: "#FFFFFF",
        colorClass: "bg-white/20",
        glowColor: "rgba(255,255,255,0.08)",
    },
    {
        name: "LeetCode",
        icon: <SiLeetcode />,
        url: "https://leetcode.com/u/ponparthasarathy/",
        stats: "Solved 200+",
        color: "#FFA116",
        colorClass: "bg-[#FFA116]/20",
        glowColor: "rgba(255,161,22,0.08)",
    },
    {
        name: "HackerRank",
        icon: <FaHackerrank />,
        url: "https://www.hackerrank.com/profile/ponparthasarath1",
        stats: "5 Star Java",
        color: "#2EC866",
        colorClass: "bg-[#2EC866]/20",
        glowColor: "rgba(46,200,102,0.08)",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/pon-parthasarathy-9b56052a7/",
        stats: "500+ Connections",
        color: "#0A66C2",
        colorClass: "bg-[#0A66C2]/20",
        glowColor: "rgba(10,102,194,0.08)",
    },
];

const CodingProfiles = () => {
    return (
        <section id="profiles" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-indigo-200">Coding Profiles</h2>
                    <p className="text-slate-500 text-sm">My activity across technical platforms.</p>
                </div>

                <div className="max-w-5xl mx-auto glass-card rounded-2xl overflow-hidden flex flex-col border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
                    {/* Terminal Header */}
                    <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-[10px] font-mono text-white/40 ml-4">ponparthasarathy@terminal ~ profiles.yaml</span>
                    </div>

                    <div className="p-8 md:p-12 font-mono">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {profiles.map((profile, idx) => (
                                <motion.a
                                    key={profile.name}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="group block p-5 md:p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all relative overflow-hidden"
                                    style={{
                                        boxShadow: `0 0 0 0 ${profile.glowColor}`,
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px 0 ${profile.glowColor}`;
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${profile.glowColor}`;
                                    }}
                                >
                                    {/* Top glow dot */}
                                    <div
                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: profile.color }}
                                    />

                                    <div className="flex items-center justify-center gap-3 mb-6 mt-2">
                                        <div className="text-3xl" style={{ color: profile.color }}>
                                            {profile.icon}
                                        </div>
                                        <span className="text-sm font-bold text-white uppercase tracking-wider">{profile.name}</span>
                                    </div>

                                    <div className="space-y-2 text-xs text-center">
                                        <div>
                                            <span className="text-indigo-400">status:</span> <span className="text-green-400">"active"</span>
                                        </div>
                                        <div>
                                            <span className="text-indigo-400">stats:</span> <span className="text-cyan-400">"{profile.stats}"</span>
                                        </div>
                                        <div className="pt-4 text-slate-500 group-hover:text-white transition-colors text-xs flex items-center justify-center gap-1">
                                            <span>view_profile()</span>
                                            <motion.span
                                                className="inline-block"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 3 }}
                                            >→</motion.span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
