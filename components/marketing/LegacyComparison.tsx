"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const OLD_CODE_SVG = (
    <svg width="100%" height="100%" viewBox="0 0 400 300" className="opacity-50">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="#f0e6d2" />
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Messy wiring lines */}
        <path d="M 20 40 H 380" stroke="black" strokeWidth="2" />
        <path d="M 20 100 H 380" stroke="black" strokeWidth="2" />
        <rect x="50" y="30" width="20" height="20" stroke="black" fill="none" />
        <rect x="150" y="30" width="20" height="20" stroke="black" fill="none" />
        <circle cx="350" cy="40" r="10" stroke="black" fill="none" />

        <path d="M 60 40 V 100" stroke="black" strokeWidth="2" />
        <path d="M 120 40 V 100" stroke="black" strokeWidth="2" />

        {/* Text smudges */}
        <text x="50" y="25" fontSize="10" fontFamily="monospace">I0.0</text>
        <text x="340" y="25" fontSize="10" fontFamily="monospace">Q0.0</text>
    </svg>
);

const NEW_CODE = `FUNCTION_BLOCK Motor_Control
VAR_INPUT
    Start : BOOL;
    Stop : BOOL;
    Safety_Ok : BOOL;
END_VAR
VAR_OUTPUT
    Motor_Run : BOOL;
    Status : STRING;
END_VAR

// Logic Vibe Copilot
// Optimized for IEC 61131-3

IF Safety_Ok AND (Start OR Motor_Run) AND NOT Stop THEN
    Motor_Run := TRUE;
    Status := 'RUNNING';
ELSE
    Motor_Run := FALSE;
    Status := 'STOPPED';
END_IF;`;

export function LegacyComparison() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <section id="legacy" className="py-24 px-6 md:px-12 bg-canvas overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 to-zinc-500">
                        Future-Proof Your Factory
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Ingest decades of legacy code and instantly refactor it into clean, documented, modern logic. Turn your 'black box' systems into transparent, optimized assets.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden cursor-col-resize border border-zinc-200 group shadow-2xl"
                >
                    {/* Background Layer (Before) */}
                    <div className="absolute inset-0 bg-[#f0e6d2] flex items-center justify-center select-none filter blur-[1px] grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                        {OLD_CODE_SVG}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex items-end p-8">
                            <span className="text-black font-mono font-bold bg-white/90 px-4 py-2 rounded shadow-lg uppercase tracking-widest text-sm">Legacy (1998)</span>
                        </div>
                    </div>

                    {/* Foreground Layer (After) - Clip Path */}
                    <div
                        className="absolute inset-0 bg-[#ffffff] select-none"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <div className="absolute inset-0 p-8 md:p-12 font-mono text-sm md:text-base text-zinc-800 overflow-hidden leading-relaxed">
                            <div className="h-full w-full flex flex-col justify-center">
                                <pre>
                                    <code dangerouslySetInnerHTML={{ __html: NEW_CODE.replace(/FUNCTION_BLOCK/g, '<span class="text-electric font-bold">FUNCTION_BLOCK</span>').replace(/VAR_INPUT/g, '<span class="text-electric font-bold">VAR_INPUT</span>').replace(/END_VAR/g, '<span class="text-electric font-bold">END_VAR</span>').replace(/BOOL/g, '<span class="text-signal font-bold">BOOL</span>').replace(/\/\/.*/g, '<span class="text-zinc-400 italic">$&</span>').replace(/TRUE/g, '<span class="text-neon-dark font-bold">TRUE</span>').replace(/FALSE/g, '<span class="text-neon-dark font-bold">FALSE</span>') }} />
                                </pre>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent flex items-end justify-end p-8">
                            <span className="text-neon-dark font-mono font-bold bg-white border border-zinc-200 px-4 py-2 rounded shadow-lg uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                                Logic Vibe Optimized
                            </span>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-[#2E5CFF] shadow-[0_0_20px_rgba(46,92,255,0.5)] z-20 pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border border-[#2E5CFF] rounded-full flex items-center justify-center text-[#2E5CFF] shadow-[0_0_15px_rgba(46,92,255,0.5)]">
                            <GripVertical size={16} />
                        </div>
                        {/* Spark particles effect placeholder */}
                        <div className="absolute top-0 w-px h-full bg-white/50 blur-[1px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
