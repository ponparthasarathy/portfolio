"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pon Parthasarathy</h3>
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
            </div>

            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;
