import { Flame, Star, Search } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

interface DashboardHeroProps {
    userName?: string;
    searchQuery?: string;
    setSearchQuery?: (value: string) => void;
}

export default function DashboardHero({ userName, searchQuery, setSearchQuery }: DashboardHeroProps) {
    return (
        <header className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden bg-white dark:bg-black border-b border-neutral-100 dark:border-neutral-900">
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
                            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-emerald-950 dark:text-white uppercase">
                                {userName ? 'Lanjut' : 'Mulai'} <span className="text-emerald-500">Misi</span> <br />
                                Sehatmu.
                            </h1>
                            <p className="text-sm md:text-lg text-neutral-500 font-medium opacity-80 max-w-lg">
                                Pilih menu bergizi transparan untuk mendukung program diet dan pola hidup sehat Anda hari ini.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fadeUp" delay={500} duration={700}>
                        <div className="space-y-4 pt-4">
                            {/* Integrated Search Bar */}
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

                <div className="relative hidden lg:block">
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
        </header>
    );
}
