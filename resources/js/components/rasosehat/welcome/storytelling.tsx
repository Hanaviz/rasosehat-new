import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';
import { StaggerReveal } from '@/components/rasosehat/shared/scroll-reveal';

export default function Storytelling() {
    const steps = [
        { step: '01', title: 'Target Gizi', desc: 'Tentukan tujuan gizi Anda hari ini.' },
        { step: '02', title: 'Pilih Menu', desc: 'Ratusan pilihan menu autentik nan sehat.' },
        { step: '03', title: 'Pantau Progres', desc: 'Cek asupan harian dengan mudah.' },
    ];

    return (
        <section className="py-32 bg-neutral-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    {/* Image Side */}
                    <ScrollReveal variant="scaleRotate" duration={1000} className="flex-1 order-2 lg:order-1 relative">
                        <div className="absolute -top-10 -left-10 size-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>

                        <img
                            src="/healthy_food_hero_1772268576019.png"
                            alt="App Story"
                            className="w-full rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(16,185,129,0.2)] border-4 border-white transform -rotate-2 hover:rotate-0 hover:scale-[1.05] hover:shadow-emerald-500/20 transition-all duration-1000 cursor-pointer"
                        />

                        {/* Floating badge */}
                        <ScrollReveal variant="fadeUp" delay={600} duration={600} className="absolute -bottom-8 -right-8">
                            <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-emerald-50 hover:scale-110 hover:shadow-emerald-200 transition-all duration-300 cursor-default">
                                <div className="text-center space-y-1">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Kesehatan Anda</p>
                                    <p className="text-3xl font-black text-neutral-900 tracking-tighter">Prioritas #1</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </ScrollReveal>

                    {/* Content Side */}
                    <div className="flex-1 order-1 lg:order-2 space-y-12">
                        <ScrollReveal variant="fadeLeft" duration={800}>
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-black text-neutral-950 uppercase tracking-tighter leading-none">
                                    Sehat Itu <br />
                                    <span className="text-emerald-500 underline decoration-emerald-200 decoration-4 underline-offset-8">Nikmat.</span>
                                </h2>
                                <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                                    Kami percaya bahwa menjaga asupan gizi tidak harus terasa seperti hukuman.
                                    Bersama ratusan mitra lokal, kami mendefinisikan ulang cara warga Padang menikmati gaya hidup sehat.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerReveal
                            variant="fadeLeft"
                            staggerDelay={150}
                            duration={600}
                            className="grid gap-6"
                        >
                            {steps.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-emerald-50/50 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-x-4 transition-all duration-500 group cursor-default">
                                    <div className="text-3xl font-black text-emerald-100 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500">{item.step}</div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                                        <p className="text-sm text-neutral-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </StaggerReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
