"use client";

import { useCallback, useRef } from 'react';

export const useSound = () => {
    const audioCtx = useRef<AudioContext | null>(null);

    const initAudio = useCallback(() => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
    }, []);

    const playTick = useCallback(() => {
        initAudio();
        if (!audioCtx.current) return;

        const osc = audioCtx.current.createOscillator();
        const gain = audioCtx.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.current.currentTime + 0.1);

        gain.gain.setValueAtTime(0.02, audioCtx.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(audioCtx.current.destination);

        osc.start();
        osc.stop(audioCtx.current.currentTime + 0.1);
    }, [initAudio]);

    const playThud = useCallback(() => {
        initAudio();
        if (!audioCtx.current) return;

        const osc = audioCtx.current.createOscillator();
        const gain = audioCtx.current.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, audioCtx.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10, audioCtx.current.currentTime + 0.2);

        gain.gain.setValueAtTime(0.05, audioCtx.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(audioCtx.current.destination);

        osc.start();
        osc.stop(audioCtx.current.currentTime + 0.2);
    }, [initAudio]);

    return { playTick, playThud };
};
