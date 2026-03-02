import Navbar from '@/components/rasosehat/shared/navbar';
import Footer from '@/components/rasosehat/shared/footer';
import DashboardHero from '@/components/rasosehat/user/dashboard-hero';
import CategoryGrid from '@/components/rasosehat/welcome/category-grid';
import SellerCTA from '@/components/rasosehat/welcome/seller-cta';
import TagFilter from '@/components/rasosehat/consumer/tag-filter';
import ProductCard from '@/components/rasosehat/consumer/product-card';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';
import { useScrollAnimation, scrollVariants } from '@/hooks/use-scroll-animation';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard({ menus }: { menus: any[] }) {
    const { auth } = usePage().props as any;
    const [activeTag, setActiveTag] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMenus = (menus || []).filter((menu) => {
        const matchesTag = activeTag === 'all' ||
            menu.categories?.some((cat: any) => cat.slug === activeTag);
        const matchesSearch = menu.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    // Scroll animation for menu grid
    const menuGrid = useScrollAnimation({ threshold: 0.05 });

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Head title="Dashboard Konsumen - Rasosehat" />

            <Navbar auth={auth} hideAuth={false} />

            {/* Dedicated Dashboard Hero */}
            <DashboardHero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                userName={auth.user?.name || 'Tamu'}
            />

            {/* Categories Section — animations handled inside component */}
            <CategoryGrid />

            {/* Dynamic Menu Discovery */}
            <section className="py-16 px-4 bg-emerald-50/30 dark:bg-emerald-950/5">
                <div className="max-w-7xl mx-auto space-y-12">
                    <ScrollReveal variant="fadeUp" duration={700}>
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 dark:text-white uppercase italic tracking-tighter">
                                Eksplorasi <span className="text-emerald-600 underline decoration-emerald-200">Menu Sehat</span>
                            </h2>
                            <p className="text-muted-foreground font-medium max-w-2xl mx-auto italic opacity-70">
                                Filter berdasarkan kebutuhan nutrisi spesifik Anda untuk hasil kesehatan yang optimal.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-8">
                        {/* Integrated Tag Filter */}
                        <ScrollReveal variant="fadeUp" delay={200} duration={600}>
                            <div className="flex justify-center overflow-hidden">
                                <TagFilter activeTag={activeTag} onTagChange={setActiveTag} />
                            </div>
                        </ScrollReveal>

                        {/* Menus Grid with staggered card animations */}
                        <div
                            ref={menuGrid.ref}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {filteredMenus.length > 0 ? (
                                filteredMenus.map((menu: any, index: number) => (
                                    <div
                                        key={menu.id}
                                        className={`transition-all ease-out hover:scale-[1.03] hover:-rotate-1 ${menuGrid.isVisible
                                                ? 'opacity-100 translate-y-0 scale-100'
                                                : 'opacity-0 translate-y-10 scale-95'
                                            }`}
                                        style={{
                                            transitionDuration: '600ms',
                                            transitionDelay: `${index * 120}ms`,
                                        }}
                                    >
                                        <ProductCard menu={menu} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center space-y-6">
                                    <div className="size-24 rounded-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center mx-auto text-emerald-200">
                                        <ShoppingBag className="size-12" />
                                    </div>
                                    <h3 className="text-2xl font-black text-emerald-950 uppercase italic tracking-tighter">Menu tidak ditemukan</h3>
                                    <Button
                                        onClick={() => { setActiveTag('all'); setSearchQuery(''); }}
                                        variant="outline"
                                        className="h-12 px-8 rounded-xl font-bold uppercase tracking-widest border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                                    >
                                        Bersihkan Filter
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Seller CTA — animations handled inside component */}
            <SellerCTA />

            <Footer />
        </div>
    );
}
