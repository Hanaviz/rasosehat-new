import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Flame, Zap, Star, Leaf, ShieldCheck, CupSoda } from 'lucide-react';

const filterTags = [
    { id: 'all', name: 'Semua Menu', icon: null },
    { id: 'rendah-kalori', name: 'Rendah Kalori', icon: <Flame className="size-4" /> },
    { id: 'tinggi-protein', name: 'Tinggi Protein', icon: <Zap className="size-4" /> },
    { id: 'bebas-gula', name: 'Bebas Gula', icon: <Star className="size-4" /> },
    { id: 'tinggi-serat', name: 'Tinggi Serat', icon: <Leaf className="size-4" /> },
    { id: 'katering-diet', name: 'Katering Diet', icon: <ShieldCheck className="size-4" /> },
    { id: 'salad-buah', name: 'Salad Buah', icon: <CupSoda className="size-4" /> },
];

interface TagFilterProps {
    activeTag: string;
    onTagChange: (tag: string) => void;
}

export default function TagFilter({ activeTag, onTagChange }: TagFilterProps) {
    return (
        <div className="w-full py-6 flex items-center gap-3 overflow-x-auto scrollbar-hide pb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            {filterTags.map((tag) => (
                <button
                    key={tag.id}
                    onClick={() => onTagChange(tag.id)}
                    className={cn(
                        "flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-[1.25rem] font-bold text-xs uppercase tracking-widest transition-all duration-300",
                        activeTag === tag.id
                            ? "bg-emerald-600 text-white shadow-xl shadow-emerald-200 -translate-y-1"
                            : "bg-white dark:bg-sidebar-accent text-neutral-400 hover:text-emerald-600 hover:bg-emerald-50 border border-neutral-100"
                    )}
                >
                    {tag.icon}
                    {tag.name}
                    {activeTag === tag.id && (
                        <div className="size-1.5 bg-white rounded-full animate-pulse ml-1" />
                    )}
                </button>
            ))}
        </div>
    );
}
