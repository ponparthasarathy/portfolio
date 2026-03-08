"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 450, mass: 0.5 };
    const cursorXSpring = useSpring(mouseX, springConfig);
    const cursorYSpring = useSpring(mouseY, springConfig);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.closest("button") ||
                target.closest("a") ||
                target.closest(".cursor-pointer") ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA";

            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Cursor Glow */}
            <motion.div
                className="absolute w-8 h-8 rounded-full border border-indigo-500/30 bg-indigo-500/5 mix-blend-screen"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isVisible ? 1 : 0,
                    borderWidth: isHovering ? "1px" : "2px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Center Dot */}
            <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                    left: mouseX,
                    top: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Trailing Glow Overlay */}
            <motion.div
                className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 0.3 : 0,
                    scale: isHovering ? 1.5 : 1,
                }}
            />
        </div>
    );
};

export default CustomCursor;
