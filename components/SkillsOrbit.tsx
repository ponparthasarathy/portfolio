"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import { SkillItem } from "../types";
import { skillsData } from "../constants/data";
import { MagneticWrapper } from "./MagneticWrapper";

const SkillIcon = ({ name, icon, color, radius, speed, delay }: SkillItem & { color: string, radius: number, speed: number, delay: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer"
            animate={{
                rotate: 360,
            }}
            transition={{
                duration: 20 / speed,
                repeat: Infinity,
                ease: "linear",
                delay: -delay,
            }}
        >
            <div
                style={{ transform: `translateX(${radius}px)` }}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20 / speed, repeat: Infinity, ease: "linear", delay: -delay }}
                    className="w-10 h-10 rounded-full bg-[#111318]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg overflow-hidden group p-2"
                >
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: color }}
                    />
                    <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                </motion.div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-[10px] font-bold rounded shadow-xl whitespace-nowrap z-50 pointer-events-none"
                        >
                            {name}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const SkillsOrbit = () => {
    // Dynamic radii based on window width (rough calculation to avoid SSR issues with window)
    // We'll use a responsive multiplier approach
    const [scale, setScale] = React.useState(1);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setScale(0.5);
            else if (window.innerWidth < 1024) setScale(0.75);
            else setScale(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 relative z-10 text-center mb-12 md:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
                >
                    Technology Constellation
                </motion.h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Explore my technical expertise across the development spectrum.
                </p>
            </div>

            <div className="relative z-10 w-full max-w-4xl flex items-center justify-center h-[400px] md:h-[600px]">
                {/* Center Label */}
                <MagneticWrapper>
                    <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 !rounded-full glass-card flex items-center justify-center flex-col border-indigo-500/20">
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-indigo-400 font-bold mb-1">Stack</span>
                        <span className="text-base md:text-xl font-bold text-white">Skills</span>
                    </div>
                </MagneticWrapper>

                {/* Orbit Rings and Icons */}
                {skillsData.map((category, catIdx) => {
                    const radius = category.orbitRadius * scale;
                    return (
                        <React.Fragment key={category.category}>
                            {/* Orbit Ring */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
                                style={{
                                    width: radius * 2,
                                    height: radius * 2,
                                }}
                            />
                            {category.items.map((skill, skillIdx) => (
                                <SkillIcon
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    color={category.color}
                                    radius={radius}
                                    speed={category.speed}
                                    delay={(skillIdx / category.items.length) * (20 / category.speed)}
                                />
                            ))}
                        </React.Fragment>
                    );
                })}
            </div>

        </section>
    );
};

export default SkillsOrbit;
