import { ChefHat, CheckCircle2, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

interface RecipeTimelineProps {
    steps?: string;
}

export default function RecipeTimeline({ steps }: RecipeTimelineProps) {
    if (!steps) return null;

    const stepsArray = steps.split('\n').filter(step => step.trim() !== '');
    const timeline = useScrollAnimation({ threshold: 0.05 });

    return (
        <section className="space-y-8 py-8 border-t border-emerald-100 dark:border-white/5 mt-12">
            <ScrollReveal variant="fadeRight" duration={600}>
                <div className="flex items-center gap-4">
                    <ChefHat className="size-8 text-emerald-600" />
                    <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter italic">Panduan Penyajian</h3>
                    <div className="flex-1 h-px bg-emerald-100 dark:bg-white/10" />
                </div>
            </ScrollReveal>

            <div
                ref={timeline.ref}
                className="relative space-y-12 pl-10 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-100 dark:before:bg-white/5"
            >
                {stepsArray.map((step, i) => (
                    <div
                        key={i}
                        className={`relative group transition-all ease-out ${timeline.isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-6'
                            }`}
                        style={{
                            transitionDuration: '600ms',
                            transitionDelay: `${i * 120}ms`,
                        }}
                    >
                        {/* Dot indicator */}
                        <div className="absolute -left-10 top-0 size-10 rounded-full bg-white dark:bg-emerald-900 border-4 border-emerald-500 z-10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-xs font-black text-emerald-950 dark:text-emerald-400">{i + 1}</span>
                        </div>

                        <div className="bg-white dark:bg-emerald-950/20 p-6 rounded-[2rem] border border-transparent hover:border-emerald-200 transition-all shopee-shadow group-hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <p className="text-neutral-700 font-bold leading-relaxed flex-1">
                                    {step.replace(/^\d+[\.)\]]\s*/, '')}
                                </p>
                                <CheckCircle2 className="size-5 text-emerald-200 group-hover:text-emerald-500 transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Note */}
            <ScrollReveal variant="fadeUp" delay={300} duration={600}>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-[2rem] flex items-center gap-4 border border-emerald-100/50">
                    <div className="size-12 rounded-xl bg-white dark:bg-emerald-800 flex items-center justify-center shopee-shadow">
                        <Clock className="size-6 text-emerald-600" />
                    </div>
                    <p className="text-xs font-bold text-emerald-900/60 leading-relaxed max-w-lg">
                        <span className="font-black uppercase text-emerald-950 mr-1">TIPS SEHAT:</span>
                        Ikuti langkah di atas dengan cermat untuk memastikan kualitas nutrisi menu tetap terjaga saat penyajian.
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
}
