"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundParticles } from "./BackgroundParticles";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-canvas">
            <BackgroundParticles />

            <div className="z-10 text-center px-6 relative max-w-5xl mx-auto space-y-8 select-none">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon tracking-wide uppercase backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                    </span>
                    System Online // v2.0.4
                </motion.div>

                {/* Main Heading with Scan Effect */}
                <div className="relative overflow-hidden p-2">
                    <motion.h1
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Custom quint-like easing
                        className="text-6xl md:text-[9rem] leading-none font-bold tracking-tighter text-white"
                    >
                        LOGIC VIBE
                    </motion.h1>

                    {/* The scanning line */}
                    <motion.div
                        initial={{ left: "0%", opacity: 1 }}
                        animate={{ left: "100%", opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute top-0 bottom-0 w-1 bg-neon/50 shadow-[0_0_20px_rgba(0,255,148,0.8)] z-20"
                    />
                </div>

                {/* Subline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                        Validate the Future. <span className="text-zinc-500">Automate the Present.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
                        The first AI-native copilot for industrial automation. Write, simulate, and verify PLC logic at the speed of thought.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col md:flex-row gap-4 justify-center pt-8"
                >
                    <Link href="/dashboard" className="cursor-pointer px-8 py-4 rounded-full bg-neon text-black font-semibold tracking-tight hover:bg-neon/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,148,0.3)]">
                        Start Evaluation
                    </Link>
                    <Link href="/docs" className="cursor-pointer px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all hover:scale-105">
                        View Documentation
                    </Link>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs font-mono uppercase tracking-widest animate-pulse-slow"
            >
                <span>Scroll to initialize</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
            </motion.div>
        </section>
    );
}
