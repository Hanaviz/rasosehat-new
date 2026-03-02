import { MessageSquare } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';
import ReviewForm from './review-form';
import ReviewList from './review-list';

interface ReviewSectionProps {
    menuId: number;
    reviews: any[];
    stats: {
        average: number;
        total: number;
        distribution: Record<number, number>;
    };
}

export default function ReviewSection({ menuId, reviews, stats }: ReviewSectionProps) {
    return (
        <section className="space-y-10 py-8 border-t border-emerald-100 dark:border-white/5">
            {/* Section Header */}
            <ScrollReveal variant="fadeRight" duration={600}>
                <div className="flex items-center gap-4">
                    <MessageSquare className="size-8 text-emerald-600" />
                    <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter italic">
                        Ulasan & Rating
                    </h3>
                    <div className="flex-1 h-px bg-emerald-100 dark:bg-white/10" />
                </div>
            </ScrollReveal>

            {/* Review Stats + List */}
            <ReviewList reviews={reviews} stats={stats} />

            {/* Write Review Form */}
            <ScrollReveal variant="fadeUp" delay={200} duration={600}>
                <div className="p-8 rounded-[2.5rem] bg-white border border-emerald-100 shopee-shadow space-y-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/40">Tulis Ulasan Anda</h4>
                    <ReviewForm menuId={menuId} />
                </div>
            </ScrollReveal>
        </section>
    );
}
