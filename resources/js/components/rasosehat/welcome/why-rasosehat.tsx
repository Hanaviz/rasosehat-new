import { Star, Flame, Zap } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

export default function WhyRasosehat() {
    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Decorative mesh background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] -mr-96 -mt-96 opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                <ScrollReveal variant="fadeRight" duration={700}>
                    <div className="mb-20 space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100/50">
                            Our Standards
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight tracking-tighter">
                            Standar Baru <br />
                            <span className="text-emerald-500">Nutrisi Anda.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Featured Card */}
                    <ScrollReveal variant="fadeRight" delay={200} duration={800} className="md:col-span-7">
                        <div className="group">
                            <div className="relative p-12 rounded-[3rem] bg-emerald-600 text-white overflow-hidden shadow-2xl shadow-emerald-200/50 transition-all hover:scale-[1.03] hover:shadow-emerald-300/50 duration-700 cursor-default">
                                <div className="absolute top-0 right-0 p-8 scale-150 opacity-10 rotate-12 group-hover:rotate-0 group-hover:scale-[1.8] transition-all duration-1000">
                                    <Star className="size-48" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                        <Star className="size-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight">Kualitas Premium <br />Tanpa Pengecualian</h3>
                                    <p className="text-emerald-50/80 text-lg font-medium leading-relaxed max-w-md">
                                        Setiap menu yang Anda lihat telah melalui proses kurasi ketat. Kami bermitra hanya dengan dapur yang memprioritaskan higienitas dan kesegaran bahan baku lokal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Smaller Cards Stack */}
                    <div className="md:col-span-5 space-y-8">
                        <ScrollReveal variant="fadeLeft" delay={400} duration={600}>
                            <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-emerald-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 group cursor-default">
                                <div className="flex items-start gap-6">
                                    <div className="size-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:shadow-xl group-hover:shadow-emerald-200 transition-all duration-500">
                                        <Flame className="size-6 text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-black text-neutral-900 uppercase leading-none tracking-tight">Data Gizi Akurat</h3>
                                        <p className="text-sm text-neutral-500 font-medium">Hitung kalori dan makro gizi harian Anda dengan presisi tinggi melalui kalkulasi tim ahli gizi kami.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeLeft" delay={600} duration={600}>
                            <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-emerald-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 group border-l-8 border-l-emerald-500 cursor-default">
                                <div className="flex items-start gap-6">
                                    <div className="size-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:shadow-xl group-hover:shadow-emerald-200 transition-all duration-500">
                                        <Zap className="size-6 text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-black text-neutral-900 uppercase leading-none tracking-tight">Logistik Efisien</h3>
                                        <p className="text-sm text-neutral-500 font-medium">Sistem pengiriman terjadwal yang memastikan makanan sehat Anda tetap optimal sampai di depan pintu.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
