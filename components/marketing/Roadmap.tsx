"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const MILESTONES = [
    { date: "Q3 2026", title: "C++ Real-Time Kernel", description: "Hard real-time deterministic control loop execution." },
    { date: "Q4 2026", title: "Go-Based Edge Gateway", description: "High-concurrency MQTT/OPC-UA broker for massive IoT ingestion." },
    { date: "2027", title: "Autonomous Plant Optimization", description: "Self-healing production lines driven by reinforcement learning." },
];

export function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <section id="roadmap" className="py-24 px-6 md:px-12 bg-canvas overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-16" ref={containerRef}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">The Horizon</h2>
                    <p className="text-zinc-500">Our vision for the autonomous future.</p>
                </div>

                <div className="relative">
                    {/* Timeline Line (Background) */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-200" />

                    {/* Timeline Line (Fill) */}
                    <motion.div
                        className="absolute left-[19px] top-0 w-[2px] bg-[#2E5CFF] shadow-[0_0_15px_rgba(46,92,255,0.5)]"
                        style={{ height: lineHeight }}
                    />

                    <div className="space-y-12">
                        {MILESTONES.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-12"
                            >
                                {/* Dot */}
                                <div className="absolute left-0 top-1.5 w-[40px] h-[40px] flex items-center justify-center bg-canvas z-10">
                                    <div className="w-3 h-3 bg-zinc-200 border-2 border-zinc-300 rounded-full group-hover:bg-[#2E5CFF] transition-colors" />
                                </div>

                                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-transparent hover:border-l-[#2E5CFF] transition-all hover:bg-white hover:shadow-xl bg-white border border-zinc-200">
                                    <span className="text-[#2E5CFF] font-mono text-sm tracking-widest uppercase">{item.date}</span>
                                    <h3 className="text-xl font-bold text-zinc-900 mt-1 mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
