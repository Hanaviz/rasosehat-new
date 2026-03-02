import { Link } from '@inertiajs/react';
import { login, register, dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Leaf } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

export default function WelcomeHero() {
    return (
        <header className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 overflow-hidden bg-emerald-950 min-h-screen flex flex-col justify-center">
            {/* BRAND LOGO */}
            <ScrollReveal variant="fadeDown" duration={800} className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Leaf className="size-6 text-white" />
                    </div>
                    <span className="text-xl font-black text-white uppercase tracking-tighter">Rasosehat</span>
                </div>
            </ScrollReveal>

            {/* Mesh Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] size-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] size-[300px] bg-emerald-400/10 rounded-full blur-[80px]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full">
                <ScrollReveal variant="scaleUp" duration={1000}>
                    <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)] bg-white dark:bg-neutral-900 group">
                        {/* Background visual */}
                        <div className="absolute inset-0 -z-10 overflow-hidden">
                            <img
                                src="/healthy_food_hero_1772268576019.png"
                                alt="Visual Background"
                                className="w-full h-full object-cover opacity-5 group-hover:scale-105 transition-transform duration-1000 blur-[2px]"
                            />
                            <div className="absolute inset-0 bg-emerald-50/40 dark:bg-black/80"></div>
                        </div>

                        <div className="relative px-6 py-12 md:px-12 md:py-16 flex flex-col items-center text-center space-y-10">
                            {/* Status Badge */}
                            <ScrollReveal variant="fadeDown" delay={300} duration={600}>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em]">
                                    <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                    Modern Healthy Living
                                </div>
                            </ScrollReveal>

                            {/* Heading */}
                            <ScrollReveal variant="fadeUp" delay={500} duration={800}>
                                <div className="space-y-4 max-w-3xl">
                                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight uppercase">
                                        Hidup Sehat, <br />
                                        <span className="text-emerald-500 underline decoration-emerald-200/50 decoration-4 underline-offset-8">Tanpa Rumit.</span>
                                    </h1>
                                    <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-semibold opacity-80">
                                        Berlangganan menu sehat terpilih langsung ke lokasi Anda.
                                        Akurasi nutrisi untuk kualitas hidup terbaik warga Kota Padang.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Buttons */}
                            <ScrollReveal variant="fadeUp" delay={700} duration={700}>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm pt-2">
                                    <Link href={dashboard()} className="w-full">
                                        <Button className="w-full h-14 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-600/20 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2">
                                            Mulai Jelajah <ArrowRight className="size-5" />
                                        </Button>
                                    </Link>
                                    <div className="flex items-center gap-2 w-full">
                                        <Link href={login()} className="flex-1">
                                            <Button variant="outline" className="w-full h-14 px-4 rounded-2xl border-2 border-neutral-100 text-neutral-900 dark:text-neutral-100 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 transition-all">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link href={register()} className="flex-1">
                                            <Button className="w-full h-14 px-4 rounded-2xl bg-neutral-900 text-white font-black text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-all">
                                                Daftar
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Trust Badges */}
                            <ScrollReveal variant="fadeUp" delay={900} duration={600}>
                                <div className="pt-8 flex flex-wrap justify-center items-center gap-6 border-t border-neutral-100 dark:border-neutral-800 w-full max-w-md">
                                    <div className="flex items-center gap-2">
                                        <Star className="size-4 fill-emerald-500 text-emerald-500" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">4.9+ Rating</span>
                                    </div>
                                    <div className="size-1 rounded-full bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Nutrisi Standar ISO</div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </header>
    );
}
