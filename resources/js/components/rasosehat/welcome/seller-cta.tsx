import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ArrowRight, Check, TrendingUp } from 'lucide-react';
import { register } from '@/routes';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

export default function SellerCTA() {
    return (
        <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <ScrollReveal variant="scaleUp" duration={800}>
                    <div className="bg-emerald-900 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-emerald-800 rounded-full -mr-16 md:-mr-20 -mt-16 md:-mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-emerald-500/20 rounded-full -ml-20 md:-ml-32 -mb-20 md:-mb-32 blur-2xl"></div>

                        {/* MOBILE LAYOUT */}
                        <div className="md:hidden relative z-10 p-6">
                            {/* Compact hero image + text overlay */}
                            <div className="relative rounded-2xl overflow-hidden mb-5 h-40">
                                <img
                                    src="/protein_category_mockup_1772268595255.png"
                                    alt="Seller Dashboard"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
                                <div className="absolute bottom-3 left-4 right-4">
                                    <h2 className="text-xl font-black text-white leading-tight tracking-tight">Mulai Bisnis Makanan Sehatmu</h2>
                                </div>
                            </div>

                            <p className="text-emerald-200/80 text-sm font-medium leading-relaxed mb-4">
                                Daftar sebagai penjual dan jangkau ribuan masyarakat Kota Padang.
                            </p>

                            {/* Compact badges inline */}
                            <div className="flex gap-2 mb-5">
                                <div className="bg-emerald-800/60 backdrop-blur-sm px-3 py-2 rounded-xl text-emerald-100 font-bold text-[11px] flex items-center gap-1.5 border border-emerald-700/50">
                                    <Check className="size-3.5 text-emerald-400" /> Verifikasi Gratis
                                </div>
                                <div className="bg-emerald-800/60 backdrop-blur-sm px-3 py-2 rounded-xl text-emerald-100 font-bold text-[11px] flex items-center gap-1.5 border border-emerald-700/50">
                                    <TrendingUp className="size-3.5 text-emerald-400" /> Kelola Stok
                                </div>
                            </div>

                            <Link href={register()}>
                                <Button className="w-full bg-white text-emerald-900 hover:bg-emerald-100 h-12 text-sm font-black rounded-2xl border-none uppercase tracking-wider">
                                    Daftar Penjual <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* DESKTOP LAYOUT */}
                        <div className="hidden md:flex items-center gap-12 p-8 md:p-16 text-white relative z-10">
                            <div className="flex-1 space-y-6">
                                <ScrollReveal variant="fadeRight" delay={200} duration={700}>
                                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Mulai Bisnis <br />Makanan Sehatmu</h2>
                                </ScrollReveal>
                                <ScrollReveal variant="fadeRight" delay={400} duration={700}>
                                    <p className="text-emerald-100 text-lg">Daftar sebagai penjual dan jangkau ribuan masyarakat Kota Padang yang ingin hidup sehat.</p>
                                </ScrollReveal>
                                <ScrollReveal variant="fadeUp" delay={600} duration={700}>
                                    <div className="flex flex-wrap gap-4 pt-4 text-emerald-900">
                                        <div className="bg-emerald-50 px-6 py-3 rounded-full font-bold flex items-center gap-2">
                                            <Icon iconNode={Check} className="size-5" /> Verifikasi Gratis
                                        </div>
                                        <div className="bg-emerald-50 px-6 py-3 rounded-full font-bold flex items-center gap-2">
                                            <Icon iconNode={TrendingUp} className="size-5" /> Kelola Stok Mudah
                                        </div>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal variant="fadeUp" delay={800} duration={700}>
                                    <Link href={register()} className="inline-block pt-6">
                                        <Button className="bg-white text-emerald-900 hover:bg-emerald-100 h-14 px-10 text-lg font-bold rounded-2xl border-none">
                                            Daftar Jadi Penjual <ArrowRight className="ml-2 size-5" />
                                        </Button>
                                    </Link>
                                </ScrollReveal>
                            </div>
                            <ScrollReveal variant="scaleRotate" delay={400} duration={900} className="flex-1 relative z-10 w-full max-w-[400px]">
                                <img
                                    src="/protein_category_mockup_1772268595255.png"
                                    alt="Seller Dashboard Preview"
                                    className="w-full rounded-2xl shadow-2xl border-4 border-emerald-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                                />
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
