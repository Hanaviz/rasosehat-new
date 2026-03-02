import { Button } from '@/components/ui/button';
import { ChevronRight, Flame, Zap, Star, Leaf, ShieldCheck, MapPin } from 'lucide-react';
import ScrollReveal, { StaggerReveal } from '@/components/rasosehat/shared/scroll-reveal';

export default function CategoryGrid() {
    const categories = [
        { name: 'Rendah Kalori', icon: <Flame className="size-6" />, color: 'bg-orange-50 text-orange-600', count: '45+ Menu' },
        { name: 'Tinggi Protein', icon: <Zap className="size-6" />, color: 'bg-emerald-50 text-emerald-600', count: '32+ Menu' },
        { name: 'Bebas Gula', icon: <Star className="size-6" />, color: 'bg-blue-50 text-blue-600', count: '28+ Menu' },
        { name: 'Tinggi Serat', icon: <Leaf className="size-6" />, color: 'bg-green-50 text-green-600', count: '15+ Menu' },
        { name: 'Katering Diet', icon: <ShieldCheck className="size-6" />, color: 'bg-purple-50 text-purple-600', count: '10+ Paket' },
        { name: 'Salad Buah', icon: <MapPin className="size-6" />, color: 'bg-red-50 text-red-600', count: '20+ Varian' },
    ];

    return (
        <section className="py-16 bg-white dark:bg-sidebar/30">
            <div className="max-w-7xl mx-auto px-4">
                <ScrollReveal variant="fadeUp" duration={600}>
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Kategori Sehat</h2>
                            <p className="text-muted-foreground">Pilih makanan sesuai target kesehatan Anda</p>
                        </div>
                        <Button variant="ghost" className="text-emerald-500 font-bold flex items-center gap-1 group text-sm">
                            Lihat Semua <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </ScrollReveal>

                <StaggerReveal
                    variant="scaleUp"
                    staggerDelay={80}
                    duration={500}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {categories.map((cat, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="bg-white dark:bg-sidebar-accent p-6 rounded-2xl shopee-shadow hover-lift border border-transparent hover:border-emerald-200 transition-all flex flex-col items-center text-center gap-4">
                                <div className={`size-14 rounded-2xl ${cat.color} flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-tight">{cat.name}</h3>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">{cat.count}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </StaggerReveal>
            </div>
        </section>
    );
}
