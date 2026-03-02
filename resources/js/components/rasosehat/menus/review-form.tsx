import { useState, useRef } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Star, Camera, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewFormProps {
    menuId: number;
}

export default function ReviewForm({ menuId }: ReviewFormProps) {
    const { auth } = usePage().props as any;
    const [hoveredStar, setHoveredStar] = useState(0);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        rating: 0,
        comment: '',
        photo: null as File | null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('photo', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const removePhoto = () => {
        setData('photo', null);
        setPreview(null);
        if (fileInput.current) fileInput.current.value = '';
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.rating === 0) return;

        post(`/menus/${menuId}/reviews`, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setPreview(null);
                setHoveredStar(0);
            },
        });
    };

    if (!auth?.user) {
        return (
            <div className="text-center py-8 px-6 rounded-3xl bg-neutral-50 border border-neutral-100">
                <p className="text-sm text-muted-foreground font-medium">
                    <a href="/login" className="text-emerald-600 font-bold underline underline-offset-4 hover:text-emerald-700">Login</a> untuk memberikan ulasan
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-6">
            {/* Star Rating Input */}
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/40">
                    Rating Anda
                </label>
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                            onClick={() => setData('rating', star)}
                            className="p-1 transition-transform hover:scale-125 active:scale-95"
                        >
                            <Star
                                className={`size-7 transition-colors ${star <= (hoveredStar || data.rating)
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-neutral-200'
                                    }`}
                            />
                        </button>
                    ))}
                    {data.rating > 0 && (
                        <span className="ml-3 text-xs font-black text-emerald-600 uppercase tracking-widest">
                            {['', 'Buruk', 'Kurang', 'Cukup', 'Bagus', 'Luar Biasa'][data.rating]}
                        </span>
                    )}
                </div>
                {errors.rating && <p className="text-xs text-red-500 font-medium">{errors.rating}</p>}
            </div>

            {/* Comment */}
            <div className="space-y-2">
                <textarea
                    value={data.comment}
                    onChange={(e) => setData('comment', e.target.value)}
                    placeholder="Ceritakan pengalaman Anda tentang menu ini..."
                    rows={3}
                    className="w-full px-5 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 outline-none text-sm font-medium text-neutral-700 placeholder:text-neutral-300 resize-none transition-all"
                />
                {errors.comment && <p className="text-xs text-red-500 font-medium">{errors.comment}</p>}
            </div>

            {/* Photo Upload & Submit */}
            <div className="flex items-end gap-3">
                {/* Photo Preview / Upload */}
                <div className="flex-1">
                    {preview ? (
                        <div className="relative inline-block">
                            <img src={preview} alt="Preview" className="size-20 rounded-2xl object-cover border-2 border-emerald-200" />
                            <button
                                type="button"
                                onClick={removePhoto}
                                className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                            >
                                <X className="size-3" />
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fileInput.current?.click()}
                            className="size-20 rounded-2xl border-2 border-dashed border-neutral-200 hover:border-emerald-300 flex flex-col items-center justify-center gap-1 text-neutral-300 hover:text-emerald-500 transition-all"
                        >
                            <Camera className="size-5" />
                            <span className="text-[8px] font-bold uppercase tracking-wider">Foto</span>
                        </button>
                    )}
                    <input
                        ref={fileInput}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={processing || data.rating === 0}
                    className="h-14 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                    <Send className="size-4 mr-2" />
                    Kirim Ulasan
                </Button>
            </div>
        </form>
    );
}
