"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-canvas/50 backdrop-blur-md">
            <div className="container mx-auto h-full px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 bg-neon/10 rounded-lg border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                        <div className="size-3 bg-neon rounded-full shadow-[0_0_10px_rgba(0,255,148,0.5)]" />
                    </div>
                    <span className="font-bold text-white tracking-tight">Logic Vibe</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#legacy" className="hover:text-white transition-colors">Migration</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
                </div>

                <Link
                    href="/login"
                    className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:border-neon/50"
                >
                    <span>Get Access</span>
                    <MoveRight className="w-4 h-4 text-zinc-400 group-hover:text-neon transition-colors" />
                </Link>
            </div>
        </nav>
    );
}
