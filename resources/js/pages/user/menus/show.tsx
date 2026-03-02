import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

// Organized Components
import MenuGallery from '@/components/rasosehat/menus/menu-gallery';
import MenuInfo from '@/components/rasosehat/menus/menu-info';
import NutritionStats from '@/components/rasosehat/menus/nutrition-stats';
import RecipeTimeline from '@/components/rasosehat/menus/recipe-timeline';
import ActionButtons from '@/components/rasosehat/menus/action-buttons';
import ReviewSection from '@/components/rasosehat/menus/review-section';
import Footer from '@/components/rasosehat/shared/footer';

interface MenuShowProps {
    menu: any;
    reviewStats: {
        average: number;
        total: number;
        distribution: Record<number, number>;
    };
}

export default function Show({ menu, reviewStats }: MenuShowProps) {
    const { auth } = usePage().props as any;

    const breadcrumbs = [
        { title: 'Home', href: '/' },
        { title: 'Eksplorasi', href: '/dashboard' },
        { title: menu.name, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${menu.name} - Rasosehat`} />

            <div className="min-h-screen bg-neutral-50/50 dark:bg-black pb-32">
                <div className="max-w-7xl mx-auto px-4 md:pt-12">
                    {/* Back Navigator */}
                    <ScrollReveal variant="fadeRight" duration={500}>
                        <div className="mb-8 overflow-hidden group">
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase text-[10px] tracking-widest transition-transform group-hover:-translate-x-1"
                            >
                                <ChevronLeft className="size-4" />
                                Kembali ke Menu
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* LEFT: MEDIA SHOWCASE */}
                        <div className="lg:sticky lg:top-24 self-start">
                            <ScrollReveal variant="scaleRotate" duration={800}>
                                <MenuGallery
                                    imagePath={menu.image_path}
                                    name={menu.name}
                                />
                            </ScrollReveal>
                        </div>

                        {/* RIGHT: CONTENT & INFO */}
                        <div className="space-y-12">
                            <ScrollReveal variant="fadeLeft" duration={700}>
                                <MenuInfo menu={menu} />
                            </ScrollReveal>

                            <ScrollReveal variant="fadeUp" delay={200} duration={700}>
                                <NutritionStats nutrients={menu.nutrients} />
                            </ScrollReveal>

                            <ScrollReveal variant="fadeUp" delay={400} duration={600}>
                                <ActionButtons />
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* FULL WIDTH: RECIPE SECTION */}
                    <ScrollReveal variant="fadeUp" delay={100} duration={800}>
                        <div className="mt-20">
                            <RecipeTimeline steps={menu.recipe_steps} />
                        </div>
                    </ScrollReveal>

                    {/* REVIEWS SECTION */}
                    <div className="mt-20">
                        <ReviewSection
                            menuId={menu.id}
                            reviews={menu.reviews || []}
                            stats={reviewStats}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </AppLayout>
    );
}
