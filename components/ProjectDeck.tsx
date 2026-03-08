"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Project } from "../types";
import { projects } from "../constants/data";
import { useSound } from "../hooks/useSound";

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { playTick, playThud } = useSound();

    const rotate = (index % 2 === 0 ? 3 : -3) + (index * 2);

    return (
        <div
            className="relative w-[300px] h-[400px] cursor-pointer group perspective"
            onMouseEnter={playTick}
            onClick={() => {
                setIsFlipped(!isFlipped);
                playThud();
            }}
        >
            <motion.div
                initial={{ y: 100, opacity: 0, rotate: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: index * 0.2,
                    rotate: { duration: 0.5, delay: index * 0.2 + 0.5 }
                }}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    y: isFlipped ? -20 : 0,
                    scale: isFlipped ? 1.05 : 1
                }}
                whileHover={{
                    y: isFlipped ? -30 : -10,
                    rotate: 0,
                    zIndex: 50,
                    transition: { rotate: { duration: 0.2 } }
                }}
                className="w-full h-full preserve-3d relative transition-shadow duration-300"
            >
                {/* Front Side */}
                <div className="!absolute inset-0 glass-card rounded-2xl p-6 backface-hidden flex flex-col border-white/20">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-2xl font-bold text-white/40">{project.suit}</span>
                        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Project {project.id}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/60 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="absolute bottom-6 right-6 text-2xl font-bold text-white/40 rotate-180">
                        {project.suit}
                    </div>
                </div>

                {/* Back Side */}
                <div className="!absolute inset-0 glass-card rounded-2xl overflow-hidden backface-hidden flex flex-col [transform:rotateY(180deg)] border-white/20">
                    {/* MacBook Frame Container */}
                    <div className="p-4 pt-6 bg-black/40 border-b border-white/5">
                        <div className="relative aspect-video w-full max-w-[240px] mx-auto group/browser">
                            {/* Device Frame */}
                            <div className="absolute inset-[-4px] border-[3px] border-slate-700/50 rounded-lg z-20 pointer-events-none" />
                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[110%] h-[4px] bg-slate-800 rounded-full z-10" />

                            {/* Toolbar */}
                            <div className="absolute top-0 left-0 right-0 h-4 bg-slate-800 flex items-center px-1.5 gap-1 z-30 rounded-t-sm">
                                <div className="w-1 h-1 rounded-full bg-red-400" />
                                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                                <div className="w-1 h-1 rounded-full bg-green-400" />
                            </div>

                            <div className="absolute inset-0 pt-4 overflow-hidden rounded-sm">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/browser:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-5 flex-grow overflow-y-auto no-scrollbar font-mono">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] text-indigo-400 opacity-50">root@system:~$</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-tighter">fetch_features.exe</span>
                        </div>

                        <ul className="text-[10px] text-slate-300 space-y-1.5 mb-6">
                            {project.features.map((f: string) => (
                                <li key={f} className="flex gap-2">
                                    <span className="text-indigo-500 font-bold">{">"}</span> {f}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] text-indigo-400 opacity-50">[LOG]</span>
                            <span className="text-[10px] text-white/50 uppercase tracking-tighter">challenge_log.txt</span>
                        </div>
                        <p className="text-[9px] text-slate-400 leading-relaxed border-l border-indigo-500/30 pl-3">
                            {project.challenges}
                        </p>
                    </div>

                    <div className="p-4 grid grid-cols-2 gap-3 border-t border-white/5 bg-black/20">
                        <a
                            href={project.liveUrl || "#"}
                            target={project.liveUrl ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="py-2 text-[10px] font-bold text-center bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all hover:shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                        >
                            LIVE_DEMO
                        </a>
                        <a
                            href={project.githubUrl || "#"}
                            target={project.githubUrl ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="py-2 text-[10px] font-bold text-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            GITHUB_SRC
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ProjectDeck = () => {
    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Project Deck
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A curated collection of my work, arranged like a deck of playing cards. Click a card to flip and explore more details.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 lg:gap-16 items-center mt-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDeck;
