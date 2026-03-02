import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Share2, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

export default function ActionButtons() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-6 md:p-8 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none lg:relative lg:bg-none lg:p-0">
            <div className="max-w-7xl mx-auto flex items-center gap-4 pointer-events-auto">
                <div className="flex-1 lg:flex-none">
                    <Button className="h-20 w-full lg:w-[400px] rounded-[2.5rem] gradient-healthy text-xl font-black uppercase tracking-widest shadow-2xl shadow-emerald-500/30 border-none transition-all hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-95">
                        <ShoppingCart className="mr-3 size-7" />
                        Tambah ke Keranjang
                    </Button>
                </div>

                <div className="flex gap-4">
                    <button className="size-20 rounded-[2rem] bg-white dark:bg-emerald-950/40 border border-emerald-100 dark:border-white/5 flex items-center justify-center text-rose-500 shadow-xl transition-all hover:scale-110 hover:bg-rose-50 active:scale-90">
                        <Heart className="size-8" />
                    </button>

                    <button className="size-20 rounded-[2rem] bg-white dark:bg-emerald-950/40 border border-emerald-100 dark:border-white/5 items-center justify-center text-emerald-600 shadow-xl hidden md:flex transition-all hover:scale-110 hover:bg-emerald-50 active:scale-90">
                        <Share2 className="size-8" />
                    </button>
                </div>
            </div>

            {/* Guaranteed Trust Badge */}
            <ScrollReveal variant="fadeUp" delay={200} duration={500}>
                <div className="hidden lg:flex items-center gap-3 mt-6 px-4 text-emerald-900/40 font-black uppercase text-[10px] tracking-[0.2em]">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    <span>Terverifikasi Rasosehat & Jaminan Higienis</span>
                </div>
            </ScrollReveal>
        </div>
    );
}
