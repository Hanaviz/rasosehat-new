import { Flame, Star, Zap, Droplets, Leaf, Milk } from 'lucide-react';
import { useScrollAnimation, scrollVariants } from '@/hooks/use-scroll-animation';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

interface NutritionStatsProps {
    nutrients?: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
        fiber: number;
        sugar: number;
        sodium: number;
    };
}

export default function NutritionStats({ nutrients }: NutritionStatsProps) {
    if (!nutrients) return null;

    const grid = useScrollAnimation({ threshold: 0.1 });

    const stats = [
        { label: 'Kalori', value: nutrients.calories, unit: 'kcal', icon: <Flame className="size-5" />, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'Protein', value: nutrients.protein, unit: 'g', icon: <Zap className="size-5" />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Karbohidrat', value: nutrients.carbs, unit: 'g', icon: <Milk className="size-5" />, color: 'text-purple-500', bg: 'bg-purple-50' },
        { label: 'Lemak', value: nutrients.fat, unit: 'g', icon: <Droplets className="size-5" />, color: 'text-red-500', bg: 'bg-red-50' },
        { label: 'Serat', value: nutrients.fiber, unit: 'g', icon: <Leaf className="size-5" />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: 'Gula', value: nutrients.sugar, unit: 'g', icon: <Star className="size-5" />, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    ];

    return (
        <section className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-900/40">Nutritional Dashboard</h4>

            <div ref={grid.ref} className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className={`p-6 rounded-[2.5rem] bg-white dark:bg-emerald-950/20 border border-emerald-100 dark:border-white/5 shopee-shadow group hover:border-emerald-300 hover:-translate-y-1 hover:scale-105 transition-all ease-out ${grid.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
                            }`}
                        style={{
                            transitionDuration: '500ms',
                            transitionDelay: `${i * 100}ms`,
                        }}
                    >
                        <div className={`size-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                            {stat.icon}
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{stat.label}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-emerald-950">{stat.value}</span>
                                <span className="text-xs font-bold text-muted-foreground">{stat.unit}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sodium Highlight */}
            <ScrollReveal variant="fadeUp" delay={200} duration={600}>
                <div className="bg-emerald-950 text-white/90 p-6 rounded-[2rem] flex items-center justify-between overflow-hidden relative group">
                    <div className="relative z-10 transition-transform group-hover:translate-x-2 duration-500">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Sodium Content</p>
                        <h5 className="text-xl font-black uppercase tracking-tighter mt-1 italic">Kandungan Garam Terpantau</h5>
                    </div>
                    <div className="relative z-10 text-right">
                        <span className="text-3xl font-black text-white">{nutrients.sodium}</span>
                        <span className="text-xs font-bold text-white/40 ml-1">mg</span>
                    </div>
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-emerald-800/20 skew-x-[-20deg] translate-x-8 group-hover:translate-x-0 transition-transform duration-700" />
                </div>
            </ScrollReveal>
        </section>
    );
}
