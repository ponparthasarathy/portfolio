"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                        <p className="text-slate-400">Discover the developer behind the code.</p>
                    </div>
                    <div className="glass-card rounded-2xl overflow-hidden border-white/10 shadow-3xl bg-black/40 backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-[10px] font-mono text-white/40 ml-4">ponparthasarathy@terminal ~ about_me.json</span>
                        </div>

                        <div className="p-8 md:p-12 font-mono">
                            <div className="space-y-6">
                                <div>
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
                                                <span className="text-green-400">"Full Stack Development"</span>,
                                                <br />
                                                <span className="text-green-400">"AI / ML Integration"</span>,
                                                <br />
                                                <span className="text-green-400">"User-Centric Products"</span>
                                            </div>
                                            ]
                                        </div>
                                    </div>
                                    {"}"};
                                </div>

                                <div className="pt-8 grid md:grid-cols-3 gap-8 border-t border-white/5 mt-8">
                                    <div className="space-y-4">
                                        <div className="text-indigo-500 text-xs font-bold uppercase tracking-widest">01 // FullStack</div>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            Crafting end-to-end solutions with a focus on security, performance, and scalability.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-cyan-500 text-xs font-bold uppercase tracking-widest">02 // AI_ML</div>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            Integrating intelligent features and machine learning models into modern applications.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-purple-500 text-xs font-bold uppercase tracking-widest">03 // UserFirst</div>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            Passion for building user-centric products that solve real-world problems elegantly.
                                        </p>
                                    </div>
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
