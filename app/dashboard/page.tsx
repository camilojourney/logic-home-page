import { Navbar } from "@/components/Navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-canvas text-white">
            <Navbar />
            <div className="pt-24 px-6 container mx-auto">
                <div className="glass-panel p-12 rounded-2xl flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-neon shadow-[0_0_20px_#00FF94]" />
                    </div>
                    <h1 className="text-4xl font-bold">Evaluation Mode Active</h1>
                    <p className="text-zinc-400 max-w-lg">
                        The simulation engine is initializing. In a production environment, this would load the full IDE and vPLC interface.
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
                        <div className="bg-white/5 p-4 rounded border border-white/10">
                            <span className="block text-xs uppercase tracking-widest text-zinc-500">Latency</span>
                            <span className="font-mono text-neon">4ms</span>
                        </div>
                        <div className="bg-white/5 p-4 rounded border border-white/10">
                            <span className="block text-xs uppercase tracking-widest text-zinc-500">Status</span>
                            <span className="font-mono text-neon">Connected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
