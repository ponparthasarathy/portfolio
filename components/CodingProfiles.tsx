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
    },
    {
        name: "LeetCode",
        icon: <SiLeetcode />,
        url: "https://leetcode.com/u/ponparthasarathy/",
        stats: "Solved 200+",
        color: "#FFA116",
    },
    {
        name: "HackerRank",
        icon: <FaHackerrank />,
        url: "https://www.hackerrank.com/profile/ponparthasarath1",
        stats: "5 Star Java",
        color: "#2EC866",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/pon-parthasarathy-9b56052a7/",
        stats: "500+ Connections",
        color: "#0A66C2",
    },
];

const CodingProfiles = () => {
    return (
        <section id="profiles" className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Coding Profiles</h2>
                    <p className="text-slate-400">My activity across technical platforms.</p>
                </div>

                <div className="max-w-5xl mx-auto glass-card rounded-2xl overflow-hidden flex flex-col border-white/10 shadow-3xl bg-black/40 backdrop-blur-xl">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {profiles.map((profile, idx) => (
                                <motion.a
                                    key={profile.name}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group block p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all font-mono"
                                >
                                    <div className="flex items-center justify-center gap-4 mb-6">
                                        <div className="text-3xl" style={{ color: profile.color }}>
                                            {profile.icon}
                                        </div>
                                        <span className="text-base font-bold text-white uppercase tracking-wider">{profile.name}</span>
                                    </div>

                                    <div className="space-y-2 text-xs text-center">
                                        <div>
                                            <span className="text-indigo-400">status:</span> <span className="text-green-400">"active"</span>
                                        </div>
                                        <div>
                                            <span className="text-indigo-400">stats:</span> <span className="text-cyan-400">"{profile.stats}"</span>
                                        </div>
                                        <div className="pt-4 text-slate-500 group-hover:text-white transition-colors text-sm">
                                            view_profile() →
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
