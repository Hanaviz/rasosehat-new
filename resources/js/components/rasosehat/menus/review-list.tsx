import { Star, ImageIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';
import { useState } from 'react';

interface Review {
    id: number;
    rating: number;
    comment: string | null;
    photo_path: string | null;
    created_at: string;
    user: {
        name: string;
        avatar?: string;
    };
}

interface ReviewStats {
    average: number;
    total: number;
    distribution: Record<number, number>;
}

interface ReviewListProps {
    reviews: Review[];
    stats: ReviewStats;
}

export default function ReviewList({ reviews, stats }: ReviewListProps) {
    const [lightbox, setLightbox] = useState<string | null>(null);
    const grid = useScrollAnimation({ threshold: 0.05 });

    const getInitials = (name: string) =>
        name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

    const timeAgo = (dateStr: string) => {
        const diff = Date.now() - new Date(dateStr).getTime();
        const days = Math.floor(diff / 86400000);
        if (days > 30) return `${Math.floor(days / 30)} bulan lalu`;
        if (days > 0) return `${days} hari lalu`;
        const hours = Math.floor(diff / 3600000);
        if (hours > 0) return `${hours} jam lalu`;
        return 'Baru saja';
    };

    return (
        <section className="space-y-10">
            {/* Rating Summary */}
            <ScrollReveal variant="fadeUp" duration={600}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-[2.5rem] bg-white border border-emerald-100 shopee-shadow">
                    {/* Average */}
                    <div className="text-center md:pr-8 md:border-r border-neutral-100 space-y-1 min-w-[120px]">
                        <p className="text-5xl font-black text-emerald-950 tracking-tighter">{stats.average || '—'}</p>
                        <div className="flex justify-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    className={`size-4 ${s <= Math.round(stats.average) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`}
                                />
                            ))}
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stats.total} Ulasan</p>
                    </div>

                    {/* Distribution Bars */}
                    <div className="flex-1 w-full space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                            const count = stats.distribution[star] || 0;
                            const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                            return (
                                <div key={star} className="flex items-center gap-3">
                                    <span className="text-xs font-black text-neutral-400 w-4 text-right">{star}</span>
                                    <Star className="size-3 text-yellow-400 fill-yellow-400" />
                                    <div className="flex-1 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full transition-all duration-1000"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-neutral-300 w-6 text-right">{count}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>

            {/* Reviews Grid */}
            {reviews.length > 0 && (
                <div ref={grid.ref} className="space-y-6">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`p-6 rounded-[2rem] bg-white border border-neutral-100 hover:border-emerald-200 shopee-shadow transition-all ease-out ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDuration: '500ms',
                                transitionDelay: `${index * 80}ms`,
                            }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Avatar */}
                                <div className="size-11 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    {review.user.avatar ? (
                                        <img src={review.user.avatar} alt={review.user.name} className="w-full h-full rounded-2xl object-cover" />
                                    ) : (
                                        <span className="text-xs font-black text-emerald-600">{getInitials(review.user.name)}</span>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0 space-y-2">
                                    {/* Header */}
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <h4 className="text-sm font-black text-emerald-950 tracking-tight">{review.user.name}</h4>
                                            <p className="text-[10px] text-muted-foreground font-medium">{timeAgo(review.created_at)}</p>
                                        </div>
                                        <div className="flex gap-0.5 flex-shrink-0">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star
                                                    key={s}
                                                    className={`size-3.5 ${s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Comment */}
                                    {review.comment && (
                                        <p className="text-sm text-neutral-600 font-medium leading-relaxed">{review.comment}</p>
                                    )}

                                    {/* Photo */}
                                    {review.photo_path && (
                                        <button
                                            onClick={() => setLightbox(review.photo_path)}
                                            className="mt-2 relative group rounded-2xl overflow-hidden inline-block"
                                        >
                                            <img
                                                src={review.photo_path}
                                                alt="Review"
                                                className="h-24 w-auto rounded-2xl object-cover border border-neutral-100 group-hover:brightness-90 transition-all"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="size-8 rounded-full bg-black/40 flex items-center justify-center">
                                                    <ImageIcon className="size-4 text-white" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {reviews.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-sm text-muted-foreground font-medium italic">Belum ada ulasan. Jadilah yang pertama!</p>
                </div>
            )}

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 cursor-pointer"
                    onClick={() => setLightbox(null)}
                >
                    <img src={lightbox} alt="Review" className="max-w-full max-h-full rounded-3xl shadow-2xl" />
                </div>
            )}
        </section>
    );
}
