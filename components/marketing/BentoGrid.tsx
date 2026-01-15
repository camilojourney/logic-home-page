"use client";

import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

// Data sources: Manufacturing Institute (2.1M shortage by 2030), NAM, and Grand View Research (CAGR 9% complexity growth)
const CHART_DATA = [
    { year: '2015', experts: 100, complexity: 20 },
    { year: '2018', experts: 92, complexity: 35 },
    { year: '2021', experts: 80, complexity: 55 },
    { year: '2024', experts: 65, complexity: 90 }, // Current inflection point
    { year: '2027', experts: 45, complexity: 125 },
    { year: '2030', experts: 30, complexity: 160 }, // Projected 2.1M job gap
];

const LANGUAGES = ["Python", "Rust", "Go", "C++", "IEC 61131-3", "Structured Text", "Ladder Logic"];

function RoboticArm() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-black/20">
            {/* Base */}
            <div className="absolute bottom-10 w-16 h-4 bg-zinc-700 rounded-t" />

            {/* Arm Segment 1 */}
            <motion.div
                className="absolute bottom-12 w-4 h-24 bg-zinc-600 rounded-full origin-bottom"
                animate={{ rotate: [0, 20, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Arm Segment 2 */}
                <motion.div
                    className="absolute top-0 w-3 h-20 bg-neon/80 rounded-full origin-bottom"
                    style={{ bottom: "100%", left: "50%", x: "-50%" }}
                    animate={{ rotate: [0, -40, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                    {/* End Effector */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 border-2 border-neon rounded-full shadow-[0_0_10px_#00FF94]" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export function BentoGrid() {
    return (
        <section id="features" className="py-24 px-6 md:px-12 bg-canvas">
            <div className="max-w-7xl mx-auto mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Why Now?
                </h2>
                <p className="text-zinc-400 max-w-xl text-lg">
                    The industrial world is changing. Logic Vibe bridges the gap between the retiring workforce and the future of autonomous manufacturing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto md:h-[500px]">
                {/* Cell 1: The Problem (Graph) */}
                <div className="md:col-span-2 relative p-6 glass-panel rounded-2xl group hover:scale-[1.01] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">The Silver Tsunami</h3>
                            <p className="text-sm text-zinc-400">Expertise Gap vs. System Complexity</p>
                        </div>
                        <div className="flex-1 min-h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={CHART_DATA}>
                                    <defs>
                                        <linearGradient id="colorExperts" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorComplexity" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00FF94" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="year" fontSize={12} stroke="#52525b" tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="experts"
                                        stroke="#ef4444"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorExperts)"
                                        name="Expert Workforce"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="complexity"
                                        stroke="#00FF94"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorComplexity)"
                                        name="System Complexity"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1 flex flex-col gap-6">
                    {/* Cell 2: Solution (Sim) */}
                    <div className="flex-1 glass-panel rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute inset-0 flex flex-col">
                            <div className="p-6 z-10">
                                <h3 className="text-xl font-bold text-white">Simulation First</h3>
                                <p className="text-sm text-zinc-400">Evaluate before execution.</p>
                            </div>
                            <div className="flex-1 relative">
                                <RoboticArm />
                            </div>
                        </div>
                    </div>

                    {/* Cell 3: Polyglot */}
                    <div className="h-40 glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center group hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white mb-4 absolute top-6 left-6">Polyglot Core</h3>
                        <div className="flex overflow-hidden relative w-full pt-8">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: [0, -500] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((lang, i) => (
                                    <span key={i} className="text-2xl font-mono text-zinc-500 hover:text-neon transition-colors cursor-default">
                                        {lang}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
