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
    const { playTick } = useSound();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active tab based on section visibility
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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center bg-[#0A0B10]/40 backdrop-blur-xl border border-white/5 rounded-full max-w-fit shadow-2xl">
                <div className="flex items-center gap-1 md:gap-4 py-2 px-1">
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
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                                {activeTab === item.name && (
                                    <motion.div
                                        layoutId="active-underline"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full"
                                    />
                                )}
                            </Link>
                        </MagneticWrapper>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
