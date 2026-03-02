import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const banners = [
    {
        id: 1,
        title: "Siap Lanjut Hidup Sehat?",
        subtitle: "Cari menu bergizi favorit Anda dan biarkan kami membantu menjaga asupan nutrisi harian Anda di Kota Padang.",
        tag: "HALO SEHAT!",
        image: "/healthy_food_hero_1772268576019.png",
        color: "from-emerald-950/80 to-transparent"
    },
    {
        id: 2,
        title: "Protein Tinggi, Energi Maksimal",
        subtitle: "Temukan koleksi Poke Bowl dan hidangan tinggi protein untuk mendukung performa harian Anda.",
        tag: "NUTRISI TERBAIK",
        image: "/protein_category_mockup_1772268595255.png",
        color: "from-blue-950/80 to-transparent"
    },
    {
        id: 3,
        title: "Detox Segar Setiap Hari",
        subtitle: "Mulai pagi Anda dengan smoothie detox berbahan organik yang menyegarkan dan melancarkan pencernaan.",
        tag: "PILIHAN ALAMI",
        image: "/detox_smoothie_banner_1772289499061.png",
        color: "from-green-950/80 to-transparent"
    }
];

export default function HeroCarousel({ userName }: { userName: string }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % banners.length);
    const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        <section className="relative w-full h-[500px] overflow-hidden rounded-[3.5rem] shopee-shadow group">
            {banners.map((banner, index) => (
                <div
                    key={banner.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    {/* Background Image */}
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className={cn("absolute inset-0 bg-gradient-to-r", banner.color)} />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20 space-y-6 text-white max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest border border-white/20 w-fit animate-in slide-in-from-left duration-700">
                            <Sparkles className="size-3.5" />
                            {index === 0 ? `HALO, ${userName.split(' ')[0]}!` : banner.tag}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] uppercase italic tracking-tighter animate-in slide-in-from-left duration-700 delay-100">
                            {banner.title}
                        </h1>

                        <p className="text-lg text-white/80 font-medium animate-in slide-in-from-left duration-700 delay-200">
                            {banner.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
                <ChevronLeft className="size-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
            >
                <ChevronRight className="size-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-12 md:left-20 z-20 flex gap-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={cn(
                            "h-1.5 transition-all duration-300 rounded-full",
                            i === current ? "w-10 bg-emerald-400" : "w-2 bg-white/30"
                        )}
                    />
                ))}
            </div>
        </section>
    );
}
