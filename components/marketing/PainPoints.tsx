"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Brain, RefreshCw, ShieldCheck, Layers, Lock, GitBranch, FileText, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PAIN_POINTS = [
    {
        icon: Brain,
        title: "Stop Stalling Due to Talent Shortages",
        subtitle: "Workforce Crisis",
        problem: [
            "Massive talent and labor shortage",
            "Difficulty finding skilled workers",
            "Need for training to manage new tools"
        ],
        solution: [
            "AI accelerates logic development allowing smaller teams to do more",
            "LogicVibe allows anyone to program automation controls",
            "Universal application minimizes learning curve"
        ],
        improvement: [
            "Automates the 70% of manual labor (typing tags, config)",
            "Auto-generates I/O mapping",
            "Graphics development automation tool"
        ]
    },
    {
        icon: Layers,
        title: "Business & Strategy",
        subtitle: " ROI & Agility",
        problem: [
            "Difficulty in justifying high initial investment and ROI",
            "Inability to quickly adapt to changing demands"
        ],
        solution: [
            "Cuts expenses by automating expert tasks",
            "Reduces need for costly development & simulations"
        ],
        improvement: [
            "Robust and simple graphics simulation",
            "Add connections for ducting/piping"
        ]
    },
    {
        icon: RefreshCw,
        title: "Modernize 20-Year-Old Code in Minutes",
        subtitle: "The Brownfield Nightmare",
        problem: [
            "Difficulty connecting new systems with old infrastructure",
            "Integrating various software/hardware"
        ],
        solution: [],
        improvement: [
            "Migration mode and reverse engineering",
            "Paste legacy code → convert to natural language → upgrade to modern platforms"
        ]
    },
    {
        icon: ShieldCheck,
        title: "AI That Validates Itself",
        subtitle: "Data Quality & Safety",
        problem: [
            "Traditional AI guesses. Logic Vibe verifies.",
            "Manual inspection cannot catch edge-case failures"
        ],
        solution: [
            "Automated Verification & Static Code Analysis",
            "Functional Validation (Asserts) & Edge-Case Testing",
            "BM25 with embeddings & rank fusion",
            "Planning mode for accurate results",
            "Evaluation benchmarks"
        ],
        improvement: [
            "Transition from \"code generation\" to \"verified logic deployment\"",
            "Auto-generated \"Verification Report\""
        ]
    },
    {
        icon: Layers,
        title: "Rigidity vs. Flexibility",
        subtitle: "The Changeover Wall",
        problem: [
            "Traditional automation is terrible at doing new things",
            "High Changeover Costs",
            "Difficulty scaling"
        ],
        solution: [
            "Automated logic generation accelerates process",
            "Reduces reliance on experts for changeovers"
        ],
        improvement: []
    },
    {
        icon: Lock,
        title: "Vendor Lock-in",
        subtitle: "Proprietary Ecosystems",
        problem: [
            "Platform fragmentation & proprietary ecosystems",
            "Limited ability to choose \"best of breed\" solutions"
        ],
        solution: [
            "Universal translator (Siemens, Rockwell, Beckhoff, Codesys)"
        ],
        improvement: [
            "Add Rockwell support (~50% US market)",
            "Access other PLC software",
            "Ladder diagram import support"
        ]
    },
    {
        icon: GitBranch,
        title: "Source Control",
        subtitle: " Collaboration Gap",
        problem: [
            "\"Which file is the latest?\" (Versioning Chaos)",
            "Collaborative Silos (Emailing files)",
            "IT/OT Gap & Tribal Knowledge loss"
        ],
        solution: [
            "Integrated Git versioning & audit trails",
            "GitHub-enabled Pull Requests",
            "Bridge to CI/CD pipeline",
            "Centralized knowledge base"
        ],
        improvement: []
    },
    {
        icon: FileText,
        title: "Documentation Debt",
        subtitle: "The Black Box",
        problem: [
            "\"The code works, but I don't know how.\""
        ],
        solution: [
            "Comprehensive AI-generated documentation"
        ],
        improvement: [
            "Markdown to PDF export"
        ]
    }
];

export function PainPoints() {
    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                        Friction vs. <span className="text-neon-dark">Flow</span>
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto">
                        We systematically dismantle the barriers in industrial automation, turning every bottleneck into a competitive advantage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {PAIN_POINTS.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-200 hover:border-neon-dark/30 flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-zinc-100 bg-zinc-50/50 flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm text-zinc-400 group-hover:text-neon-dark group-hover:border-neon-dark/50 transition-colors">
                                    <point.icon className="size-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 leading-none mb-1">
                                        {point.title}
                                    </h3>
                                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                                        {point.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow">
                                {/* Problem Section - The "Before" */}
                                <div className="p-6 pb-4 relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-px bg-red-100" />
                                    <h4 className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3 pl-4">
                                        <AlertTriangle className="size-3" /> The Bottleneck
                                    </h4>
                                    <ul className="space-y-2 pl-4">
                                        {point.problem.map((item, i) => (
                                            <li key={i} className="text-sm text-zinc-500 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Divider with Arrow */}
                                <div className="relative h-px bg-zinc-100 w-full my-2">
                                    <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white p-1 rounded-full border border-zinc-100 text-zinc-300">
                                        <ArrowRight className="size-4" />
                                    </div>
                                </div>

                                {/* Solution Section - The "After" */}
                                <div className="p-6 pt-4 bg-gradient-to-b from-white to-green-50/30 flex-grow relative">
                                    <div className="absolute left-6 top-0 bottom-6 w-px bg-neon-dark/20" />
                                    <h4 className="flex items-center gap-2 text-xs font-bold text-neon-dark uppercase tracking-widest mb-3 pl-4">
                                        <Zap className="size-3" /> The Breakthrough
                                    </h4>
                                    <ul className="space-y-3 pl-4">
                                        {[...point.solution, ...point.improvement].map((item, i) => {
                                            const isNew = point.improvement.includes(item);
                                            return (
                                                <li key={i} className="text-sm text-zinc-800 font-medium leading-relaxed flex items-start gap-2">
                                                    <span className="mt-1.5 size-1.5 rounded-full bg-neon-dark shrink-0" />
                                                    <span>
                                                        {item}
                                                        {isNew && (
                                                            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-neon-dark/10 text-neon-dark uppercase tracking-wide">
                                                                New
                                                            </span>
                                                        )}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
