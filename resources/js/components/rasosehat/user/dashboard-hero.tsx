import { Flame, Star, Search, Leaf, Zap, Heart, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

interface DashboardHeroProps {
    userName?: string;
    searchQuery?: string;
    setSearchQuery?: (value: string) => void;
}

export default function DashboardHero({ userName, searchQuery, setSearchQuery }: DashboardHeroProps) {
    return (
        <header className="relative overflow-hidden">
            {/* ===== MOBILE HERO (shown < lg) ===== */}
            <div className="lg:hidden relative">
                {/* Hero with background image */}
                <div className="pt-24 pb-10 px-5 relative overflow-hidden min-h-[420px] flex flex-col justify-end">
                    {/* Background Image */}
                    <img
                        src="/healthy_food_hero_1772268576019.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-emerald-950/40"></div>
                    {/* Subtle decorative glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-20 -right-20 size-60 bg-emerald-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 -left-10 size-40 bg-teal-400/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 space-y-5">
                        {/* Greeting Badge */}
                        <ScrollReveal variant="fadeRight" duration={500}>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-[0.15em] border border-white/20">
                                <Flame className="size-3.5" />
                                {userName ? `HALO, ${userName.split(' ')[0]}!` : 'EKSPLORASI MENU HARI INI'}
                            </div>
                        </ScrollReveal>

                        {/* Heading */}
                        <ScrollReveal variant="fadeRight" delay={150} duration={600}>
                            <h1 className="text-3xl font-black leading-[1.1] tracking-tighter text-white uppercase">
                                {userName ? 'Lanjut' : 'Mulai'} <span className="text-emerald-100">Misi</span> <br />
                                Sehatmu.
                            </h1>
                            <p className="text-sm text-emerald-50/70 font-medium mt-2 max-w-xs">
                                Pilih menu bergizi transparan untuk mendukung pola hidup sehat Anda.
                            </p>
                        </ScrollReveal>

                        {/* Mini Stats Row */}
                        <ScrollReveal variant="fadeUp" delay={300} duration={500}>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                                            <Leaf className="size-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-bold text-emerald-100/60 uppercase tracking-wider">Nutrisi</p>
                                            <p className="text-sm font-black text-white tracking-tight">A+ Grade</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                                            <TrendingUp className="size-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-bold text-emerald-100/60 uppercase tracking-wider">Populer</p>
                                            <p className="text-sm font-black text-white tracking-tight">50+ Menu</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center">
                                            <Heart className="size-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-bold text-emerald-100/60 uppercase tracking-wider">Rating</p>
                                            <p className="text-sm font-black text-white tracking-tight">4.9 ★</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Bottom Wave */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33C840 36 960 42 1080 45C1200 48 1320 48 1380 48L1440 48V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-white dark:fill-black" />
                        </svg>
                    </div>
                </div>

                {/* Search Bar (below gradient, on white bg) */}
                <div className="px-5 -mt-1 pb-6 bg-white dark:bg-black">
                    <ScrollReveal variant="fadeUp" delay={400} duration={500}>
                        <div className="relative group shadow-lg shadow-emerald-100/50 rounded-2xl overflow-hidden border border-emerald-100 transition-all focus-within:shadow-xl focus-within:shadow-emerald-200/50 focus-within:border-emerald-300">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 size-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery?.(e.target.value)}
                                placeholder="Cari menu sehat..."
                                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-emerald-950/20 border-none outline-none text-emerald-950 dark:text-white font-bold placeholder:text-neutral-300 placeholder:font-medium text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-3 px-2 pt-3 text-[9px] font-black text-emerald-900/30 uppercase tracking-widest">
                            <Star className="size-3.5 text-yellow-400 fill-current" />
                            <span>Paling segar di Kota Padang hari ini</span>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* ===== DESKTOP HERO (shown >= lg) ===== */}
            <div className="hidden lg:block pt-36 pb-24 px-4 relative bg-white dark:bg-black border-b border-neutral-100 dark:border-neutral-900">
                {/* Split Background Effect */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 skew-x-[-12deg] translate-x-32 origin-top"></div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <ScrollReveal variant="fadeRight" duration={600}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-200/50">
                                <Flame className="size-3.5" />
                                {userName ? `HALO, ${userName.split(' ')[0]}!` : 'EKSPLORASI MENU HARI INI'}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight" delay={200} duration={800}>
                            <div className="space-y-2">
                                <h1 className="text-6xl font-black leading-[1.1] tracking-tighter text-emerald-950 dark:text-white uppercase">
                                    {userName ? 'Lanjut' : 'Mulai'} <span className="text-emerald-500">Misi</span> <br />
                                    Sehatmu.
                                </h1>
                                <p className="text-lg text-neutral-500 font-medium opacity-80 max-w-lg">
                                    Pilih menu bergizi transparan untuk mendukung program diet dan pola hidup sehat Anda hari ini.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeUp" delay={500} duration={700}>
                            <div className="space-y-4 pt-4">
                                <div className="relative group shopee-shadow rounded-2xl overflow-hidden border-4 border-white dark:border-emerald-900/30 transition-all focus-within:shadow-2xl focus-within:shadow-emerald-200/50 max-w-xl">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500 size-6 group-focus-within:scale-110 transition-transform" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery?.(e.target.value)}
                                        placeholder="Cari Salad, Poke Bowl, atau Menu Sehat..."
                                        className="w-full h-16 pl-16 pr-8 bg-neutral-50 dark:bg-emerald-950/20 border-none outline-none text-emerald-950 dark:text-white font-black placeholder:text-neutral-300 placeholder:font-bold text-lg uppercase tracking-tighter"
                                    />
                                </div>
                                <div className="flex items-center gap-4 px-4 text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">
                                    <Star className="size-4 text-yellow-400 fill-current" />
                                    <span>Paling segar di Kota Padang hari ini</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="relative">
                        <ScrollReveal variant="scaleRotate" delay={300} duration={1000}>
                            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(16,185,129,0.15)] border-8 border-white dark:border-emerald-900/30 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <img
                                    src="/healthy_food_hero_1772268576019.png"
                                    alt="Healthy Bowl"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Nutritional Badges */}
                        <ScrollReveal variant="fadeDown" delay={800} duration={600} className="absolute -top-6 -right-6 z-20">
                            <div className="glass-effect p-6 rounded-[2rem] shadow-2xl flex flex-col items-center gap-1 border-t-2 border-l-2 border-white/50">
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">Quality</p>
                                <p className="text-2xl font-black text-emerald-950">A+</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeUp" delay={1000} duration={600} className="absolute -bottom-10 -left-6 z-20">
                            <div className="glass-effect p-6 rounded-[2rem] shadow-2xl space-y-3 min-w-[220px] border-b-2 border-r-2 border-white/50">
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Daily Gizi</p>
                                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="h-2 w-full bg-emerald-100/30 rounded-full overflow-hidden">
                                        <div className="h-full w-4/5 bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                    </div>
                                    <div className="flex justify-between text-[9px] font-black text-emerald-950 uppercase tracking-tighter">
                                        <span>Protein Target</span>
                                        <span>85% Done</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </header>
    );
}
