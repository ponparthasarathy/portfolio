"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
    {
        number: "01",
        label: "FullStack",
        color: "text-indigo-400",
        border: "border-indigo-500/30",
        text: "Crafting end-to-end solutions with a focus on security, performance, and scalability.",
    },
    {
        number: "02",
        label: "AI_ML",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        text: "Integrating intelligent features and machine learning models into modern applications.",
    },
    {
        number: "03",
        label: "UserFirst",
        color: "text-purple-400",
        border: "border-purple-500/30",
        text: "Passion for building user-centric products that solve real-world problems elegantly.",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-indigo-200">About Me</h2>
                        <p className="text-slate-500 text-sm">Discover the developer behind the code.</p>
                    </div>

                    <div className="glass-card rounded-2xl overflow-hidden border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-[10px] font-mono text-white/40 ml-4">ponparthasarathy@terminal ~ about_me.json</span>
                        </div>

                        <div className="p-5 sm:p-8 md:p-12 font-mono">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-purple-400">const</span> <span className="text-indigo-400">developerInfo</span> = {"{"}
                                    <div className="pl-6 mt-2 space-y-2">
                                        <div>
                                            <span className="text-white">role:</span> <span className="text-green-400">"Full Stack Software Engineer"</span>,
                                        </div>
                                        <div>
                                            <span className="text-white">mission:</span> <span className="text-green-400">"Building intelligent systems and modern digital experiences that push boundaries."</span>,
                                        </div>
                                        <div>
                                            <span className="text-white">expertise:</span> [
                                            <div className="pl-6 mt-1 space-y-1">
                                                <span className="text-green-400">"Full Stack Development"</span>,<br />
                                                <span className="text-green-400">"AI / ML Integration"</span>,<br />
                                                <span className="text-green-400">"User-Centric Products"</span>
                                            </div>
                                            ]
                                        </div>
                                    </div>
                                    {"}"};
                                </motion.div>

                                <div className="pt-8 grid md:grid-cols-3 gap-6 border-t border-white/5 mt-8">
                                    {pillars.map((p, i) => (
                                        <motion.div
                                            key={p.label}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.12 }}
                                            className={`space-y-3 border-l-2 ${p.border} pl-4`}
                                        >
                                            <div className={`${p.color} text-[11px] font-bold uppercase tracking-widest`}>
                                                {p.number} // {p.label}
                                            </div>
                                            <p className="text-slate-400 text-xs leading-relaxed">{p.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
