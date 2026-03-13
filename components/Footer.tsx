"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 relative overflow-hidden">
            {/* Top gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10"
            >
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Pon Parthasarathy</h3>
                    <p className="text-slate-500 text-sm">Full Stack Software Engineer | AI / ML Developer</p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-400">
                    <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
                    <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
                    <a href="https://github.com/ponparthasarathy" className="hover:text-indigo-400 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/pon-parthasarathy-9b56052a7/" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                </div>

                <div className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
                    © 2026 • Built with Next.js & Cosmic Energy
                </div>
            </motion.div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;
