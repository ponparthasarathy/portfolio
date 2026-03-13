"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Project } from "../types";
import { projects } from "../constants/data";
import { useSound } from "../hooks/useSound";

/* ─── Corner Badge (top-left / bottom-right like a rummy card) ─── */
const CornerBadge = ({ suit, id, flip = false }: { suit: string; id: number; flip?: boolean }) => (
    <div className={`flex flex-col items-center leading-none ${flip ? "rotate-180" : ""}`}>
        <span className="text-lg font-black text-indigo-400 leading-none">{id}</span>
        <span className="text-base leading-none text-indigo-300/70">{suit}</span>
    </div>
);



/* ─── Project Card ─── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { playTick, playThud } = useSound();

    const rotate = (index % 2 === 0 ? 3 : -3) + index * 1.5;

    return (
        <div
            className="relative w-[calc(100vw-48px)] max-w-[330px] h-[480px] cursor-pointer perspective"
            onMouseEnter={playTick}
            onClick={() => {
                setIsFlipped(!isFlipped);
                playThud();
            }}
        >
            <motion.div
                initial={{ y: 120, opacity: 0, rotate: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 1.2,
                    delay: index * 0.2,
                    rotate: { duration: 0.6, delay: index * 0.2 + 0.6 },
                }}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    y: isFlipped ? -24 : 0,
                    scale: isFlipped ? 1.04 : 1,
                }}
                whileHover={{
                    y: isFlipped ? -36 : -14,
                    rotate: 0,
                    zIndex: 50,
                    transition: { rotate: { duration: 0.2 } },
                }}
                className="w-full h-full preserve-3d relative"
            >

                {/* ══════════════════ FRONT FACE ══════════════════ */}
                <div className="!absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] flex flex-col border border-white/10 bg-[#0d1224]/60 backdrop-blur-xl group-hover:border-indigo-500/30 transition-colors">

                    {/* Top-left corner badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <CornerBadge suit={project.suit} id={project.id} />
                    </div>
                    {/* Bottom-right corner badge (rotated 180°) */}
                    <div className="absolute bottom-4 right-4 z-10">
                        <CornerBadge suit={project.suit} id={project.id} flip />
                    </div>

                    {/* Center suit watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                        <span className="text-[140px] leading-none text-indigo-500/[0.04] font-black">{project.suit}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-grow px-7 pt-16 pb-16">
                        {/* Suit badge line */}
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-5 h-[1.5px] bg-indigo-500/40" />
                            <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400/70 uppercase">PROJECT {project.id}</span>
                            <span className="flex-grow h-[1.5px] bg-indigo-500/20" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[24px] font-black text-white mb-4 leading-tight tracking-tight drop-shadow-sm">{project.title}</h3>

                        {/* Description */}
                        <p className="text-[13px] text-slate-300/90 leading-relaxed mb-8 flex-grow">{project.description}</p>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent mb-5" />

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-2.5 py-1 bg-indigo-400/10 border border-indigo-400/20 rounded-md text-[10px] text-indigo-200/90 font-medium tracking-wide">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom hint */}
                    <div className="relative z-10 pb-6 flex justify-center">
                        <span className="text-[9px] text-white/20 tracking-[0.25em] font-bold uppercase">click flip</span>
                    </div>
                </div>

                {/* ══════════════════ BACK FACE ══════════════════ */}
                <div
                    className="!absolute inset-0 backface-hidden rounded-2xl overflow-hidden [transform:rotateY(180deg)] flex flex-col shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] border border-white/10 bg-[#0b0e1a]/80 backdrop-blur-xl group-hover:border-indigo-500/20 transition-colors"
                >
                    {/* ── Visual Identity Panel ── */}
                    <div className="relative mx-4 mt-6 rounded-xl overflow-hidden flex items-center justify-center border border-white/5 bg-white/[0.03]" style={{ height: "140px" }}>
                        {/* Border ring */}
                        <div className="absolute inset-0 rounded-xl" style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.15)" }} />

                        {/* Radial aura glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div style={{
                                width: "130px", height: "130px", borderRadius: "50%",
                                background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
                                filter: "blur(12px)"
                            }} />
                        </div>

                        {/* Spinning dashed orbit ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute"
                            style={{
                                width: "100px", height: "100px", borderRadius: "50%",
                                border: "1px dashed rgba(99,102,241,0.3)",
                            }}
                        />

                        {/* Inner solid ring */}
                        <div className="absolute" style={{
                            width: "70px", height: "70px", borderRadius: "50%",
                            border: "1px solid rgba(99,102,241,0.15)",
                        }} />

                        {/* Center glowing suit symbol */}
                        <span className="relative z-10 font-black leading-none select-none" style={{
                            fontSize: "56px",
                            color: "#818cf8",
                            filter: "drop-shadow(0 0 15px rgba(129,140,248,0.6))",
                        }}>
                            {project.suit}
                        </span>

                        {/* Project title label at bottom */}
                        <div className="absolute bottom-2.5 left-0 right-0 flex justify-center">
                            <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-white/20">{project.title}</span>
                        </div>
                    </div>

                    {/* Info body */}
                    <div className="flex-grow px-7 pt-5 pb-2 overflow-y-auto no-scrollbar">
                        {/* Simple elegant header */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] font-black text-indigo-400/80 tracking-widest uppercase">Key Features</span>
                            <div className="flex-grow h-px bg-white/10" />
                        </div>

                        {/* Feature list */}
                        <ul className="space-y-2 mb-6">
                            {project.features.map((f: string) => (
                                <li key={f} className="flex items-center gap-3 text-[12px] text-slate-200/90 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Challenges */}
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-black text-indigo-300/60 tracking-widest uppercase">Challenge Log</span>
                            <div className="flex-grow h-px bg-white/5" />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed border-l-2 border-indigo-500/20 pl-4 py-1 italic">
                            {project.challenges}
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="mx-4 mb-6 grid grid-cols-2 gap-3">
                        <a
                            href={project.liveUrl || "#"}
                            target={project.liveUrl ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="py-3 text-[10px] font-bold text-center text-white rounded-xl transition-all border border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] bg-gradient-to-r from-indigo-600/20 to-indigo-500/20"
                        >
                            LIVE DEMO ↗
                        </a>
                        <a
                            href={project.githubUrl || "#"}
                            target={project.githubUrl ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="py-3 text-[10px] font-bold text-center text-white/70 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all"
                        >
                            SOURCE CODE
                        </a>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

/* ─── Section ─── */
const ProjectDeck = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-indigo-300"
                    >
                        Project Deck
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm">
                        A curated collection of my work, arranged like a deck of playing cards. Click a card to flip and explore.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 items-end mt-10 relative">
                    {/* Background deck glow */}
                    <div className="absolute inset-0 bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDeck;
