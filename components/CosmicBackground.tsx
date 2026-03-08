"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function Stars() {
    const mesh = useRef<THREE.Points>(null!);
    const count = 2000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = time * 0.05;
        mesh.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                {/* @ts-ignore */}
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.07}
                color="#ffffff"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function Debris({ count = 200 }) {
    const mesh = useRef<THREE.Points>(null!);
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.y = time * 0.02;
        mesh.current.position.y = Math.sin(time * 0.1) * 0.5;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                {/* @ts-ignore */}
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#6366F1"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

const CosmicBackground = () => {
    const { scrollY } = useScroll();

    // Video parallax and scale
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    // Hide video after Hero section (around 800-1000px)
    const videoOpacity = useTransform(scrollY, [0, 1000], [0.7, 0]);

    return (
        <div className="fixed inset-0 -z-10 bg-[#0A0B10]">
            {/* Blackhole Video Background */}
            <motion.div
                style={{
                    y: yTransform,
                    scale: scaleTransform,
                    opacity: videoOpacity,
                }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/blackhole.webm" type="video/webm" />
                </video>
            </motion.div>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B10]/40 via-transparent to-[#0A0B10] pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <React.Suspense fallback={null}>
                    <Stars />
                    <Debris count={200} />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

export default CosmicBackground;
