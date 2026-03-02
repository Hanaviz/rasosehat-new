import { Star } from 'lucide-react';

export default function AuthInfoSection({
    title,
    quote,
    author
}: {
    title: React.ReactNode,
    quote: string,
    author: string
}) {
    return (
        <div className="hidden lg:flex relative h-full flex-col justify-end p-12 md:p-16 overflow-hidden rounded-l-[3rem]">
            {/* BACKGROUND IMAGE LAYER */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/healthy_food_hero_1772268576019.png"
                    className="w-full h-full object-cover grayscale-[20%] brightness-[0.4]"
                    alt="Healthy Food"
                />
                {/* SOPHISTICATED GRADIENTS */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay" />
            </div>

            {/* RE-SCALED CONTENT */}
            <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em]">
                        <Star className="size-3 fill-current" />
                        Verified Choice
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="pt-8 border-t border-white/10 max-w-lg">
                    <blockquote className="space-y-6">
                        <p className="text-lg md:text-xl font-semibold italic text-neutral-300 leading-relaxed">
                            "{quote}"
                        </p>
                        <footer className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                <div className="size-5 rounded-full border-2 border-white/50"></div>
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-xs font-black text-white uppercase tracking-widest">{author.split(' — ')[0]}</p>
                                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{author.split(' — ')[1]}</p>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>

            {/* Decorative Grid Overlay for 'Interest' */}
            <div className="absolute inset-0 z-[1] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none" />
        </div>
    );
}
