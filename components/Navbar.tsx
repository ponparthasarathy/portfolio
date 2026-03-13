"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSound } from "../hooks/useSound";
import { MagneticWrapper } from "./MagneticWrapper";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#profiles" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { playTick } = useSound();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navItems.map(item => item.name.toLowerCase());
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* ── Desktop Nav ── */}
            <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${isScrolled ? "pt-3" : "pt-5"}`}>
                <div className="flex items-center px-2 bg-[#0A0B10]/60 backdrop-blur-2xl border border-white/[0.07] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-1 py-2 px-1">
                        {navItems.map((item) => (
                            <MagneticWrapper key={item.name}>
                                <Link
                                    href={item.href}
                                    onMouseEnter={playTick}
                                    onClick={() => setActiveTab(item.name)}
                                    className="relative px-4 py-2 text-sm font-medium transition-colors"
                                >
                                    <span className={`relative z-10 ${activeTab === item.name ? "text-white" : "text-slate-400 hover:text-white"}`}>
                                        {item.name}
                                    </span>
                                    {activeTab === item.name && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
                                            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                        />
                                    )}
                                    {activeTab === item.name && (
                                        <motion.div
                                            layoutId="active-underline"
                                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_6px_rgba(99,102,241,0.8)]"
                                        />
                                    )}
                                </Link>
                            </MagneticWrapper>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ── Mobile Nav ── */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
                <div className={`flex items-center justify-between px-5 transition-all duration-300 ${isScrolled ? "py-3 bg-[#0A0B10]/90 backdrop-blur-xl border-b border-white/[0.06]" : "py-4 bg-transparent"}`}>
                    {/* Logo / Name on mobile */}
                    <span className="text-sm font-bold text-white tracking-tight">Pon Parthasarathy</span>

                    {/* Hamburger button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="flex flex-col gap-[5px] p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-white origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-5 h-[1.5px] bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-[1.5px] bg-white origin-center"
                        />
                    </button>
                </div>

                {/* Mobile dropdown menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden bg-[#0A0B10]/95 backdrop-blur-2xl border-b border-white/[0.07]"
                        >
                            <div className="flex flex-col px-5 py-4 gap-1">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                setActiveTab(item.name);
                                                setMenuOpen(false);
                                            }}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === item.name
                                                    ? "bg-indigo-500/10 text-white border border-indigo-500/20"
                                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
