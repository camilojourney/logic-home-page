export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-bold text-white text-xl tracking-tight">Logic Vibe</span>
                    <span className="text-zinc-500 text-sm">© 2026 Logic Vibe Industries. All systems nominal.</span>
                </div>

                <div className="flex gap-8 text-sm text-zinc-400">
                    <a href="#" className="hover:text-neon transition-colors">Privacy</a>
                    <a href="#" className="hover:text-neon transition-colors">Terms</a>
                    <a href="#" className="hover:text-neon transition-colors">Twitter</a>
                    <a href="#" className="hover:text-neon transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
