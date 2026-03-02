import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Flame, Zap, ArrowRight } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { login } from '@/routes';

interface ProductCardProps {
    menu: any;
}

export default function ProductCard({ menu }: ProductCardProps) {
    const { auth } = usePage().props as any;
    const isGuest = !auth?.user;

    return (
        <div className="group bg-white dark:bg-sidebar-accent rounded-[2.5rem] shopee-shadow border border-transparent hover:border-emerald-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
            {/* ... rest of the card content ... */}
            <Link href={`/menus/${menu.slug}`} className="relative aspect-square overflow-hidden block">
                {menu.image_path ? (
                    <img
                        src={menu.image_path}
                        alt={menu.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center">
                        <ShoppingBag className="size-12 text-emerald-200" />
                    </div>
                )}

                {/* Calories Info Overlay */}
                {menu.nutrients?.calories && (
                    <div className="absolute top-4 left-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Flame className="size-3.5 text-orange-500 fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-950">{menu.nutrients.calories} Kcal</span>
                    </div>
                )}

                {/* Protein Info Overlay */}
                {menu.nutrients?.protein && (
                    <div className="absolute top-4 right-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Zap className="size-3.5 text-emerald-500 fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-950">{menu.nutrients.protein}g Protein</span>
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                            {menu.categories?.[0]?.name || 'Menu Sehat'}
                        </p>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="size-3 fill-current" />
                            <span className="text-[10px] font-black">4.9</span>
                        </div>
                    </div>
                    <Link href={`/menus/${menu.slug}`}>
                        <h3 className="text-lg font-black text-emerald-950 dark:text-white uppercase tracking-tighter italic leading-tight group-hover:text-emerald-600 transition-colors">
                            {menu.name}
                        </h3>
                    </Link>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 font-medium">
                    {menu.description || 'Nikmati hidangan sehat berkualitas dari bahan-bahan organik segar pilihan.'}
                </p>

                <div className="pt-2 mt-auto flex items-center justify-between border-t border-neutral-50 dark:border-neutral-800">
                    <p className="text-xl font-black text-emerald-600 italic">
                        Rp {Number(menu.price).toLocaleString('id-ID')}
                    </p>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                {isGuest ? (
                                    <Link href={login()}>
                                        <Button size="icon" className="size-10 rounded-2xl bg-neutral-100 hover:bg-emerald-50 text-neutral-400 hover:text-emerald-600 border border-neutral-200 transition-all">
                                            <Plus className="size-5" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button size="icon" className="size-10 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 transform transition-transform active:scale-95">
                                        <Plus className="size-5 text-white" />
                                    </Button>
                                )}
                            </TooltipTrigger>
                            {isGuest && (
                                <TooltipContent side="top" className="bg-emerald-900 text-white rounded-xl p-3 border-none shadow-2xl max-w-[200px]">
                                    <div className="space-y-1">
                                        <p className="font-black text-[10px] uppercase tracking-widest text-emerald-300">Login Diperlukan</p>
                                        <p className="text-[10px] font-medium leading-relaxed italic">Ingin memesan {menu.name}? Login sekarang untuk simpan pesananmu!</p>
                                    </div>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
}

function Plus({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    )
}
