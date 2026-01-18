"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ChevronRight, Terminal, Shield, Cpu, Box, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

type DocSection = {
    id: string;
    title: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
};

const DOC_CONTENT: Record<string, DocSection> = {
    introduction: {
        id: "introduction",
        title: "Introduction to Logic Vibe",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-xl text-zinc-600 leading-relaxed">
                    Logic Vibe is an AI-native copilot for industrial automation. It allows engineers to generate, simulate, and verify PLC logic before it ever touches hardware.
                </p>
                <div className="h-px bg-zinc-200 w-full" />
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-zinc-900">Why Evaluation First?</h2>
                    <div className="prose prose-zinc text-zinc-600">
                        <p>In web development, a bug means a confusing error message. In industrial automation, a bug means a crushed robotic arm or a stopped production line. The cost of failure is physical.</p>
                        <p className="mt-4">Logic Vibe introduces a "Physics-Aware" pre-flight check for your code.</p>
                    </div>
                </div>
            </div>
        )
    },
    installation: {
        id: "installation",
        title: "Installation & Setup",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">Logic Vibe runs as a hybrid cloud/edge application. You can use the web interface for simulation, but the Edge Runtime requires a local agent.</p>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 font-mono text-sm shadow-lg">
                    <div className="flex items-center gap-2 text-zinc-400 mb-4 border-b border-zinc-800 pb-2">
                        <Terminal size={14} />
                        <span>Terminal</span>
                    </div>
                    <div className="space-y-2">
                        <p className="text-zinc-100"><span className="text-[#2E5CFF]">$</span> curl -sL https://logicvibe.ai/install.sh | bash</p>
                        <p className="text-zinc-500"># Verifying system requirements...</p>
                        <p className="text-zinc-500"># Installing Docker runtime...</p>
                        <p className="text-zinc-500"># Logic Vibe Edge Agent v2.0.4 installed successfully.</p>
                    </div>
                </div>

                <div className="p-4 bg-[#2E5CFF]/10 border border-[#2E5CFF]/20 rounded-lg text-[#2E5CFF] text-sm">
                    <strong>Note:</strong> Requires Linux kernel 5.4+ or Windows WSL2.
                </div>
            </div>
        )
    },
    architecture: {
        id: "architecture",
        title: "System Architecture",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">Logic Vibe follows a decoupled "Brain/Body" architecture.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
                        <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center text-electric mb-4">
                            <Cpu size={20} />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2"> The Brain (Cloud)</h3>
                        <p className="text-sm text-zinc-600">Handles LLM inference, project storage, and heavy physics simulation calculations.</p>
                    </div>
                    <div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
                        <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center text-signal mb-4">
                            <Box size={20} />
                        </div>
                        <h3 className="font-bold text-zinc-900 mb-2"> The Body (Edge)</h3>
                        <p className="text-sm text-zinc-600">Runs the compiled IEC 61131-3 logic in real-time (sub-5ms) and communicates with physical I/O.</p>
                    </div>
                </div>
            </div>
        )
    },
    safety: {
        id: "safety",
        title: "Safety Protocols",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">Safety is not a feature; it is a constraint. Logic Vibe enforces SIL-3 (Safety Integrity Level) compliance checks.</p>

                <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-4 rounded-lg bg-white border border-zinc-200 shadow-sm">
                        <Shield className="text-[#2E5CFF] shrink-0 mt-1" />
                        <div>
                            <strong className="text-zinc-900 block">Formal Verification</strong>
                            <span className="text-sm text-zinc-600">Every logical path is mathematically proven to avoid deadlocks before compilation.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-lg bg-white border border-zinc-200 shadow-sm">
                        <Shield className="text-[#2E5CFF] shrink-0 mt-1" />
                        <div>
                            <strong className="text-zinc-900 block">Sandboxed Execution</strong>
                            <span className="text-sm text-zinc-600">User scripts (Python/JS) run in isolated WASM containers with no direct memory access to the safety core.</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    },
    digital_twins: {
        id: "digital_twins",
        title: "Digital Twins",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">A Digital Twin in Logic Vibe is more than a 3D model; it is a live physics simulation bound to your variables.</p>
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-200 bg-zinc-900 relative flex items-center justify-center group shadow-md">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full z-10 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#2E5CFF] rounded-full animate-pulse" />
                        <span className="font-mono text-sm text-white">Simulation: Active</span>
                    </div>
                </div>
                <p className="text-sm text-zinc-500 italic">Example: A 6-axis arm digital twin reacts to PLC outputs with accurate inertia and collision physics.</p>
            </div>
        )
    },
    vplc: {
        id: "vplc",
        title: "vPLC Runtime",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">The Virtual PLC (vPLC) is a software-defined controller that mimics the behavior of hardware like Siemens S7 or Allen-Bradley ControlLogix.</p>
                <div className="grid grid-cols-2 gap-4">
                    {["Cyclic Execution", "Memory Image", "I/O Update", "Interrupt Handling"].map((item) => (
                        <div key={item} className="p-4 bg-white border border-zinc-200 rounded text-center text-sm font-mono text-zinc-600 shadow-sm">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    iec: {
        id: "iec",
        title: "IEC 61131-3 Standards",
        content: (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-zinc-600">Logic Vibe supports all 5 standard languages defined by the IEC.</p>
                <div className="space-y-2">
                    {[
                        { code: "LD", name: "Ladder Diagram", desc: "Relay logic replacement" },
                        { code: "ST", name: "Structured Text", desc: "Pascal-like high level language" },
                        { code: "FBD", name: "Function Block Diagram", desc: "Signal flow processing" },
                        { code: "SFC", name: "Sequential Function Chart", desc: "State machine sequencer" },
                        { code: "IL", name: "Instruction List", desc: "Assembly-like (Deprecated)" },
                    ].map((lang) => (
                        <div key={lang.code} className="flex items-center gap-4 p-3 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors rounded">
                            <span className="font-mono font-bold text-[#2E5CFF] w-12">{lang.code}</span>
                            <div>
                                <div className="text-zinc-900 font-medium">{lang.name}</div>
                                <div className="text-xs text-zinc-500">{lang.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default function Docs() {
    const [activeId, setActiveId] = useState("introduction");

    const activeSection = DOC_CONTENT[activeId];

    return (
        <div className="min-h-screen bg-canvas text-zinc-900">
            <Navbar />
            <div className="pt-24 px-6 container mx-auto flex flex-col md:flex-row gap-12">
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-8 shrink-0 overflow-y-auto md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-zinc-900">Getting Started</h3>
                        <ul className="space-y-1 text-sm text-zinc-500">
                            <SidebarItem id="introduction" label="Introduction" activeId={activeId} onClick={setActiveId} />
                            <SidebarItem id="installation" label="Installation" activeId={activeId} onClick={setActiveId} />
                            <SidebarItem id="architecture" label="Architecture" activeId={activeId} onClick={setActiveId} />
                            <SidebarItem id="safety" label="Safety Protocols" activeId={activeId} onClick={setActiveId} />
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-zinc-900">Core Concepts</h3>
                        <ul className="space-y-1 text-sm text-zinc-500">
                            <SidebarItem id="digital_twins" label="Digital Twins" activeId={activeId} onClick={setActiveId} />
                            <SidebarItem id="vplc" label="vPLC Runtime" activeId={activeId} onClick={setActiveId} />
                            <SidebarItem id="iec" label="IEC 61131-3" activeId={activeId} onClick={setActiveId} />
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <div className="flex-1 max-w-3xl pb-24 min-h-[600px]">
                    {activeSection ? (
                        <>
                            <h1 className="text-5xl font-bold mb-6 text-zinc-900">{activeSection.title}</h1>
                            {activeSection.content}
                        </>
                    ) : (
                        <div className="text-zinc-500">Select a topic...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ id, label, activeId, onClick }: { id: string, label: string, activeId: string, onClick: (id: string) => void }) {
    const isActive = activeId === id;
    return (
        <li
            onClick={() => onClick(id)}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200",
                isActive
                    ? "bg-[#2E5CFF]/10 text-[#2E5CFF]"
                    : "hover:text-zinc-900 hover:bg-zinc-100"
            )}
        >
            {isActive && <ChevronRight size={14} className="animate-in fade-in slide-in-from-left-1 duration-300" />}
            <span className={cn(isActive && "font-medium")}>{label}</span>
        </li>
    );
}
