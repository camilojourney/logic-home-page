"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const SUBSCRIPTIONS = [
    {
        name: "Spark",
        price: "Free",
        description: "For students and hobbyists.",
        features: ["Unlimited Logic Editing", "Basic Simulation (2D)", "50 AI Copilot Chats/mo", "Community Support"],
        highlight: false,
    },
    {
        name: "Integrator",
        price: "$39",
        period: "/mo",
        description: "For freelance integrators.",
        features: ["Everything in Spark", "Advanced Physics Simulation (3D)", "Legacy Code Migration (5 files/mo)", "Unlimited AI (Claude 3.5 Sonnet)", "Python & Rust Scripting"],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For OEMs and manufacturing plants.",
        features: ["Unlimited Legacy Migration", "Private AI Model Training", "IEC 61499 Distributed Mgmt", "SSO & Audit Logs", "24/7 Priority Support"],
        highlight: false,
    },
];

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className="py-24 px-6 md:px-12 bg-canvas relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
                        Return on Investment
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        One hour of downtime costs $1.3 million. Logic Vibe costs less than a utility bill.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-zinc-900" : "text-zinc-400")}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-16 h-8 bg-zinc-200 rounded-full relative px-1 cursor-pointer"
                        >
                            <motion.div
                                className="w-6 h-6 bg-white shadow-md rounded-full"
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                style={{
                                    marginLeft: isAnnual ? "2rem" : "0"
                                }}
                            />
                        </button>
                        <span className={cn("text-sm font-medium transition-colors", isAnnual ? "text-zinc-900" : "text-zinc-400")}>Yearly <span className="text-neon-dark text-xs ml-1 font-bold">(-20%)</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SUBSCRIPTIONS.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative p-8 rounded-2xl border flex flex-col gap-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2",
                                plan.highlight
                                    ? "bg-white border-[#2E5CFF] shadow-2xl shadow-[#2E5CFF]/10 group"
                                    : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xl"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute inset-0 rounded-2xl border border-[#2E5CFF]/50 animate-pulse opacity-50 pointer-events-none" />
                            )}

                            <div className="space-y-2">
                                <h3 className={cn("text-xl font-bold", plan.highlight ? "text-[#2E5CFF]" : "text-zinc-900")}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className={cn("text-4xl font-bold", plan.highlight ? "text-zinc-900" : "text-zinc-900")}>{plan.price}</span>
                                    {plan.period && <span className="text-zinc-500">{plan.period}</span>}
                                </div>
                                <p className="text-sm text-zinc-500">{plan.description}</p>
                            </div>

                            <div className="flex flex-col gap-3 flex-1">
                                {plan.features.map((feat) => (
                                    <div key={feat} className="flex items-start gap-3 text-sm text-zinc-600">
                                        <Check className="w-4 h-4 text-[#2E5CFF] shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/"
                                className={cn(
                                    "w-full py-3 rounded-lg font-medium transition-colors text-center block",
                                    plan.highlight
                                        ? "bg-[#2E5CFF] text-white hover:bg-[#2E5CFF]/90 shadow-lg shadow-[#2E5CFF]/20"
                                        : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                                )}
                            >
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
