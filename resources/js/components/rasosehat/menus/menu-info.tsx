import { Badge } from '@/components/ui/badge';
import { Star, Store, MapPin, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

interface MenuInfoProps {
    menu: {
        name: string;
        price: number | string;
        description?: string;
        categories?: any[];
        shop?: {
            name: string;
            address?: string;
        };
    };
}

export default function MenuInfo({ menu }: MenuInfoProps) {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(Number(menu.price));

    return (
        <div className="space-y-8 py-4">
            {/* Header Area */}
            <div className="space-y-4">
                <ScrollReveal variant="fadeLeft" duration={500}>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="size-4 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-xs font-black text-emerald-900/40 uppercase tracking-widest">4.9 (120+ Ulasan)</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeLeft" delay={100} duration={600}>
                    <h1 className="text-4xl md:text-5xl font-black text-emerald-950 uppercase tracking-tighter leading-none">
                        {menu.name}
                    </h1>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={200} duration={500}>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {menu.categories?.map((cat) => (
                            <Badge
                                key={cat.id}
                                variant="secondary"
                                className="bg-emerald-50 text-emerald-700 border-emerald-100 px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-100 transition-colors"
                            >
                                {cat.name}
                            </Badge>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {/* Price section */}
            <ScrollReveal variant="fadeUp" delay={300} duration={600}>
                <div className="flex items-end gap-3">
                    <span className="text-5xl font-black text-emerald-600 tracking-tighter drop-shadow-sm">
                        {formattedPrice}
                    </span>
                    <span className="text-emerald-900/30 font-bold mb-1.5 line-through">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number(menu.price) * 1.2)}
                    </span>
                </div>
            </ScrollReveal>

            {/* Shop Info Card */}
            <ScrollReveal variant="scaleUp" delay={400} duration={700}>
                <div className="bg-white dark:bg-emerald-950/20 p-6 rounded-[2rem] border border-emerald-100 dark:border-white/5 shopee-shadow group cursor-pointer transition-all hover:border-emerald-300">
                    <div className="flex items-center gap-4">
                        <div className="size-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform">
                            <Store className="size-8" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-black text-emerald-950 uppercase tracking-tight">{menu.shop?.name || 'Toko Rasosehat'}</h3>
                                <ShieldCheck className="size-4 text-emerald-500" />
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mt-1">
                                <MapPin className="size-3.5" />
                                <span>{menu.shop?.address || 'Padang, Sumatera Barat'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal variant="fadeUp" delay={500} duration={600}>
                <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40">Tentang Menu Ini</h4>
                    <p className="text-neutral-600 leading-relaxed font-medium italic opacity-80">
                        {menu.description || 'Pilihan menu sehat ini dirancang khusus dengan bahan-bahan organik berkualitas tinggi untuk menjaga kebugaran tubuh Anda sepanjang hari.'}
                    </p>
                </div>
            </ScrollReveal>
        </div>
    );
}
