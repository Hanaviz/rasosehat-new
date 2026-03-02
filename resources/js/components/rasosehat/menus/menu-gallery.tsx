import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

interface MenuGalleryProps {
    imagePath?: string;
    name: string;
}

export default function MenuGallery({ imagePath, name }: MenuGalleryProps) {
    const [isHovered, setIsHovered] = useState(false);
    const defaultImage = "/healthy_food_hero_1772268576019.png";

    return (
        <div
            className="relative aspect-square md:aspect-auto md:h-[70vh] md:max-h-[600px] rounded-[3rem] overflow-hidden group/gallery cursor-zoom-in"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Image */}
            <img
                src={imagePath || defaultImage}
                alt={name}
                className={`w-full h-full object-cover transition-transform duration-800 ease-out ${isHovered ? 'scale-[1.15]' : 'scale-[1.05]'}`}
            />

            {/* Premium Overlay Mesh */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all duration-500 scale-90 group-hover/gallery:scale-100">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 text-white shadow-2xl">
                    <Maximize2 className="size-8" />
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-8 left-8 z-10">
                <div className="bg-emerald-500 text-white px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/30">
                    Menu Segar
                </div>
            </div>

            {/* Abstract Decorative Elements */}
            <div className="absolute -bottom-12 -right-12 size-48 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-12 -left-12 size-48 bg-white/10 rounded-full blur-3xl" />
        </div>
    );
}
