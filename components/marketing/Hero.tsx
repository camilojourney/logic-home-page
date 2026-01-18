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


                {/* Main Heading with Scan Effect */}
                <div className="relative overflow-hidden p-2">
                    <motion.h1
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Custom quint-like easing
                        className="text-6xl md:text-[9rem] leading-none font-bold tracking-tighter text-zinc-900"
                    >
                        LOGIC VIBE
                    </motion.h1>

                    {/* The scanning line */}
                    <motion.div
                        initial={{ left: "0%", opacity: 1 }}
                        animate={{ left: "100%", opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute top-0 bottom-0 w-1 bg-neon/80 shadow-[0_0_20px_rgba(46,92,255,0.5)] z-20"
                    />
                </div>

                {/* Subline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="space-y-8 max-w-5xl mx-auto bg-white/50 backdrop-blur-[2px] rounded-3xl p-8 md:p-16 border border-white/60 shadow-[0_8px_32px_rgba(46,92,255,0.05)]"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-zinc-900 tracking-tighter leading-[0.95] -ml-1">
                        The First AI Copilot for <span className="text-zinc-500">Industrial Automation.</span>
                    </h2>
                    <p className="text-zinc-600 font-normal leading-relaxed text-xl md:text-2xl max-w-4xl mx-auto">
                        Don't just write code—simulate and verify it instantly. Bridge the skills gap and modernize legacy systems without the headache.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col md:flex-row gap-4 justify-center pt-8"
                >
                    <Link href="/dashboard" className="cursor-pointer px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold tracking-tight hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg">
                        Start Evaluation
                    </Link>
                    <Link href="/docs" className="cursor-pointer px-8 py-4 rounded-full glass-panel text-zinc-900 font-medium hover:bg-white/80 transition-all hover:scale-105">
                        View Documentation
                    </Link>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-widest animate-pulse-slow"
            >
                <span>Scroll to initialize</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
            </motion.div>
        </section>
    );
}
