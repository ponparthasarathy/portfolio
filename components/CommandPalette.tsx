"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationCommands } from "../constants/data";
import { useSound } from "../hooks/useSound";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [commandOutput, setCommandOutput] = useState<React.ReactNode | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { playTick, playThud } = useSound();

    const filteredCommands = navigationCommands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                playThud();
            }

            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleGlobalKeyDown);
        return () => window.removeEventListener("keydown", handleGlobalKeyDown);
    }, [playThud]);

    const handleSelect = (id: string) => {
        if (id.startsWith('cmd:')) {
            processEasterEgg(id.split(':')[1]);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
        playThud();
    };

    const processEasterEgg = (cmd: string) => {
        setSearch("");
        playThud();

        if (cmd === "neofetch") {
            setCommandOutput(
                <div className="font-mono text-[10px] md:text-xs leading-tight animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="flex gap-4">
                        <div className="text-indigo-500 font-bold shrink-0">
                            {`      .---. \n     /     \\ \n     | ( ) | \n     \\     / \n      '---' `}
                        </div>
                        <div className="space-y-1">
                            <p><span className="text-indigo-400">user</span>@<span className="text-indigo-400">pon-os</span></p>
                            <p>----------------</p>
                            <p><span className="text-indigo-400">OS</span>: Pon-Core v1.0.4</p>
                            <p><span className="text-indigo-400">Host</span>: Space-Portfolio v2</p>
                            <p><span className="text-indigo-400">Kernel</span>: Next.js 14.1</p>
                            <p><span className="text-indigo-400">Shell</span>: Antigravity-v1</p>
                            <p><span className="text-indigo-400">Theme</span>: Cosmic-Dark</p>
                            <p><span className="text-indigo-400">CPU</span>: AI-Optimized</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setCommandOutput(null)}
                        className="mt-4 px-3 py-1 bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-all"
                    >
                        [Close Output]
                    </button>
                </div>
            );
        } else if (cmd === "ls") {
            setCommandOutput(
                <div className="font-mono text-xs space-y-1">
                    <div className="grid grid-cols-2 gap-2 text-indigo-400">
                        <span>drwxr-xr-x about</span>
                        <span>drwxr-xr-x skills</span>
                        <span>drwxr-xr-x projects</span>
                        <span>drwxr-xr-x contact</span>
                        <span className="text-white/40">-rw-r--r-- resume.pdf</span>
                        <span className="text-white/40">-rw-r--r-- system.log</span>
                    </div>
                    <button onClick={() => setCommandOutput(null)} className="mt-4 text-[9px] text-white/20 underline">clear</button>
                </div>
            );
        } else if (cmd === "whoami") {
            setCommandOutput(
                <div className="font-mono text-xs text-indigo-400 italic">
                    "A builder of intelligent systems and cinematic digital architectures."
                    <button onClick={() => setCommandOutput(null)} className="block mt-4 text-[9px] text-white/20 underline">done</button>
                </div>
            );
        }
    };

    useEffect(() => {
        if (isOpen) {
            setSearch("");
            setSelectedIndex(0);
            setCommandOutput(null);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (commandOutput) {
            if (e.key === "Escape" || e.key === "Enter") setCommandOutput(null);
            return;
        }

        if (search.toLowerCase() === "neofetch" && e.key === "Enter") {
            processEasterEgg("neofetch");
            return;
        }
        if (search.toLowerCase() === "ls" && e.key === "Enter") {
            processEasterEgg("ls");
            return;
        }
        if (search.toLowerCase() === "whoami" && e.key === "Enter") {
            processEasterEgg("whoami");
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === "Enter") {
            if (filteredCommands[selectedIndex]) {
                handleSelect(filteredCommands[selectedIndex].id);
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="relative w-full max-w-2xl bg-[#0D0F14] border border-white/10 rounded-xl overflow-hidden shadow-2xl pointer-events-auto"
                    >
                        {/* Terminal Header */}
                        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Navigation Terminal</span>
                            <div className="w-10 text-[10px] font-mono text-white/30 text-right">Esc</div>
                        </div>

                        <div className="p-4">
                            {!commandOutput && (
                                <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg border border-white/10 focus-within:border-indigo-500/50 transition-colors">
                                    <span className="text-indigo-500 font-mono font-bold">$</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder='Search commands... (try "neofetch")'
                                        className="w-full bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-white/20"
                                    />
                                </div>
                            )}

                            <div className="mt-4 max-h-[400px] overflow-y-auto no-scrollbar">
                                {commandOutput ? (
                                    <div className="p-2">
                                        {commandOutput}
                                    </div>
                                ) : (
                                    <div className="space-y-1">
                                        {filteredCommands.length > 0 ? (
                                            filteredCommands.map((cmd, idx) => (
                                                <div
                                                    key={cmd.id}
                                                    onClick={() => handleSelect(cmd.id)}
                                                    onMouseEnter={() => {
                                                        setSelectedIndex(idx);
                                                        playTick();
                                                    }}
                                                    className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition-all ${idx === selectedIndex
                                                        ? "bg-indigo-600/20 border border-indigo-500/30"
                                                        : "bg-transparent border border-transparent hover:bg-white/5"
                                                        }`}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className={`text-sm font-mono ${idx === selectedIndex ? "text-indigo-400" : "text-white/80"}`}>
                                                            {cmd.command}
                                                        </span>
                                                        <span className="text-[10px] text-white/40 font-mono mt-0.5">{cmd.description}</span>
                                                    </div>
                                                    {idx === selectedIndex && (
                                                        <span className="text-[10px] font-mono text-indigo-500 font-bold tracking-tighter">⏎ ENTER</span>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center border border-dashed border-white/5 rounded-lg">
                                                <span className="text-xs font-mono text-white/20">No terminal matches. Try "ls" or "neofetch"</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border-t border-white/5 px-4 py-2 flex items-center justify-between">
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1.5 grayscale opacity-50">
                                    <span className="px-1.5 py-0.5 bg-white/10 border border-white/20 rounded text-[9px] font-mono text-white">↑↓</span>
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Navigate</span>
                                </div>
                                <div className="flex items-center gap-1.5 grayscale opacity-50">
                                    <span className="px-1.5 py-0.5 bg-white/10 border border-white/20 rounded text-[9px] font-mono text-white">Enter</span>
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Execute</span>
                                </div>
                            </div>
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{filteredCommands.length} results</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
