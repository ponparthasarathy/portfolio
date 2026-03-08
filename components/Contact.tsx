"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants/data";
import { MagneticWrapper } from "./MagneticWrapper";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        const formData = new FormData(form.current);
        const name = (formData.get("from_name") as string).trim();
        const email = (formData.get("from_email") as string).trim();
        const message = (formData.get("message") as string).trim();

        if (!name || !email || !message) {
            setStatus("error");
            setErrorMessage("Please fill in all fields.");
            return;
        }

        setStatus("sending");

        // We send all common key variations to ensure the user's template picks them up
        const templateParams = {
            from_name: name,
            from_email: email,
            user_name: name,
            user_email: email,
            name: name,
            email: email,
            message: message,
            reply_to: email,
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        if (!serviceId || !templateId || !publicKey) {
            setStatus("error");
            setErrorMessage("Email configuration is missing.");
            return;
        }

        emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        )
            .then(() => {
                setStatus("success");
                form.current?.reset();
                setTimeout(() => setStatus("idle"), 5000);
            }, (error) => {
                setStatus("error");
                setErrorMessage(error.text || "Failed to send message. Please try again.");
                setTimeout(() => setStatus("idle"), 5000);
            });
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto glass-card rounded-2xl overflow-hidden flex flex-col border-white/10 shadow-3xl bg-black/40 backdrop-blur-xl">
                    {/* Terminal Header */}
                    <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-[10px] font-mono text-white/40 ml-4">ponparthasarathy@terminal ~ contact.sh</span>
                    </div>

                    <div className="p-10 md:p-16 flex flex-col md:flex-row gap-16">
                        <div className="flex-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Let's <span className="text-indigo-400">connect</span>()
                                </h2>
                                <p className="text-sm text-slate-400 leading-relaxed max-w-md font-mono">
                                    // I'm always open to new opportunities, collaborations, or just a quick chat about technology.
                                </p>
                            </motion.div>

                            <div className="space-y-6 pt-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">Email</span>
                                    <MagneticWrapper>
                                        <a href={`mailto:${socialLinks.email}`} className="block text-xl font-mono text-slate-400 hover:text-white transition-colors break-all">
                                            {socialLinks.email}
                                        </a>
                                    </MagneticWrapper>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">Socials</span>
                                    <div className="flex gap-6">
                                        <MagneticWrapper>
                                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                                        </MagneticWrapper>
                                        <MagneticWrapper>
                                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="font-mono text-slate-400 hover:text-white transition-colors">GitHub</a>
                                        </MagneticWrapper>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <motion.form
                                ref={form}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                                onSubmit={sendEmail}
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                            <span className="opacity-50">01</span> input.name
                                        </label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500/50 transition-all font-mono"
                                            placeholder="Enter your name..."
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                            <span className="opacity-50">02</span> input.email
                                        </label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500/50 transition-all font-mono"
                                            placeholder="Enter your email..."
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                            <span className="opacity-50">03</span> input.message
                                        </label>
                                        <textarea
                                            rows={3}
                                            name="message"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-indigo-500/50 transition-all font-mono resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <motion.button
                                        type="submit"
                                        disabled={status === "sending"}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-10 py-4 font-mono text-sm rounded-lg transition-all border ${status === "sending"
                                            ? "bg-white/5 border-white/10 text-white/40 cursor-not-allowed"
                                            : "bg-indigo-600/10 border-indigo-500/30 hover:bg-indigo-600/20 text-indigo-400"
                                            }`}
                                    >
                                        {status === "sending" ? "sending..." : "send_message()"}
                                    </motion.button>

                                    <AnimatePresence>
                                        {status === "success" && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="text-green-400 font-mono text-xs"
                                            >
                                                {"> "}Success: Message sent!
                                            </motion.span>
                                        )}
                                        {status === "error" && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="text-red-400 font-mono text-xs"
                                            >
                                                {"> "}Error: {errorMessage}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
