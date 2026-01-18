"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-black/5 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto h-full px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative size-10">
                        <div className="absolute inset-0 bg-neon/20 rounded-full blur-md group-hover:bg-neon/40 transition-colors" />
                        <img
                            src="/image.png"
                            alt="Logic Vibe"
                            className="relative size-full object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl text-zinc-900 tracking-tight">Logic Vibe</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-600">
                    <Link href="#features" className="hover:text-zinc-900 transition-colors">Features</Link>
                    <Link href="#legacy" className="hover:text-zinc-900 transition-colors">Migration</Link>
                    <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
                    <Link href="#roadmap" className="hover:text-zinc-900 transition-colors">Roadmap</Link>
                </div>

                <Link
                    href="https://logicvibe.onrender.com/"
                    className="group relative px-6 py-3 bg-zinc-900 text-white text-base font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2">
                        Try it now
                        <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </Link>
            </div>
        </nav>
    );
}
