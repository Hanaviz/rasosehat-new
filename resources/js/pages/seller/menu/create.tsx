import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';
import { Utensils, Info, ListOrdered, DollarSign, Package, Sparkles, ChevronRight } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/seller/dashboard' },
    { title: 'Menu Saya', href: '/seller/menu' },
    { title: 'Tambah Menu', href: '/seller/menu/create' },
];

export default function CreateMenu({ categories }: { categories: any[] }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        stock: '',
        description: '',
        recipe_steps: '',
        category_ids: [] as number[],
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/seller/menu');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Unggah Menu Sehat - Rasosehat" />

            <div className="max-w-5xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-white dark:bg-sidebar-accent rounded-[3.5rem] shopee-shadow border border-neutral-50 dark:border-neutral-800 overflow-hidden">
                    <div className="grid md:grid-cols-5">
                        {/* Side Branding Section */}
                        <div className="md:col-span-2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                            <div className="relative z-10 space-y-8">
                                <div className="size-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Sparkles className="size-8 text-emerald-300" />
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-tight">Berbagi <br />Kebaikan <br />Gizi</h1>
                                    <p className="text-emerald-100/70 font-medium text-lg italic border-l-2 border-emerald-400/30 pl-6">"Masakan sehat Anda adalah langkah awal bagi masyarakat Kota Padang untuk hidup lebih berkualitas."</p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-12">
                                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-emerald-300">
                                    <div className="size-1 bg-emerald-300 rounded-full" /> PROSES VERIFIKASI 24 JAM
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="md:col-span-3 p-8 md:p-14 space-y-10">
                            <header className="space-y-2">
                                <h2 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter italic">Detail Menu Sehat</h2>
                                <p className="text-muted-foreground font-medium text-base">Lengkapi informasi di bawah ini dengan jujur dan akurat.</p>
                            </header>

                            <form onSubmit={submit} className="space-y-8">
                                <div className="space-y-6">
                                    {/* Nama Menu */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 pl-1">Nama Masakan / Minuman</Label>
                                        <div className="relative">
                                            <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('name', e.target.value)}
                                                placeholder="Misal: Salad Buah Saus Yogurt Premium"
                                                className="h-14 pl-12 pr-6 rounded-[1.25rem] border-neutral-100 bg-neutral-50/50 dark:bg-neutral-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-bold text-lg"
                                            />
                                        </div>
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Harga */}
                                        <div className="space-y-2">
                                            <Label htmlFor="price" className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 pl-1">Harga (Rp)</Label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                                                <Input
                                                    id="price"
                                                    type="number"
                                                    value={data.price}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('price', e.target.value)}
                                                    placeholder="25000"
                                                    className="h-14 pl-12 pr-6 rounded-[1.25rem] border-neutral-100 bg-neutral-50/50 dark:bg-neutral-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-bold text-lg"
                                                />
                                            </div>
                                            <InputError message={errors.price} />
                                        </div>

                                        {/* Stok */}
                                        <div className="space-y-2">
                                            <Label htmlFor="stock" className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 pl-1">Stok Harian</Label>
                                            <div className="relative">
                                                <Package className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                                                <Input
                                                    id="stock"
                                                    type="number"
                                                    value={data.stock}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('stock', e.target.value)}
                                                    placeholder="10"
                                                    className="h-14 pl-12 pr-6 rounded-[1.25rem] border-neutral-100 bg-neutral-50/50 dark:bg-neutral-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-bold text-lg"
                                                />
                                            </div>
                                            <InputError message={errors.stock} />
                                        </div>
                                    </div>

                                    {/* Deskripsi */}
                                    <div className="space-y-2">
                                        <Label htmlFor="description" className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 pl-1">Ceritakan Keunggulan Menu Ini</Label>
                                        <div className="relative">
                                            <Info className="absolute left-4 top-4 size-5 text-muted-foreground" />
                                            <Textarea
                                                id="description"
                                                value={data.description}
                                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)}
                                                placeholder="Misal: Menggunakan sari yogurt asli dengan potongan buah segar..."
                                                className="min-h-[120px] pl-12 pr-6 py-4 rounded-[1.5rem] border-neutral-100 bg-neutral-50/50 dark:bg-neutral-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-base italic"
                                            />
                                        </div>
                                        <InputError message={errors.description} />
                                    </div>

                                    {/* Komposisi (Kunci Gizi) */}
                                    <div className="space-y-2">
                                        <Label htmlFor="recipe_steps" className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600 pl-1 flex items-center gap-2">
                                            <ListOrdered className="size-3" /> Komposisi Bahan & Cara Masak
                                        </Label>
                                        <Textarea
                                            id="recipe_steps"
                                            value={data.recipe_steps}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('recipe_steps', e.target.value)}
                                            placeholder="Tuliskan berat bahan agar tim verifikator dapat menghitung gizi menu Anda secara akurat.&#10;Contoh:&#10;1. 100g Melon&#10;2. 50g Strawberry&#10;3. Dimasak tanpa minyak goreng..."
                                            className="min-h-[160px] px-6 py-6 rounded-[1.5rem] border-rose-100 bg-rose-50/30 dark:bg-rose-950/20 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 transition-all font-mono text-sm leading-relaxed"
                                        />
                                        <p className="text-[10px] font-bold text-muted-foreground/60 px-2 italic uppercase tracking-wider">
                                            * Informasi ini sangat rahasia & hanya digunakan untuk perhitungan nutrisi.
                                        </p>
                                        <InputError message={errors.recipe_steps} />
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                    <Button
                                        disabled={processing}
                                        type="submit"
                                        className="flex-1 h-16 rounded-[1.25rem] gradient-healthy shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 font-black text-xl uppercase tracking-tighter italic transition-all hover:scale-[1.02] flex items-center justify-center gap-3 border-none"
                                    >
                                        SIMPAN & TUNGGU VERIFIKASI <ChevronRight className="size-6" />
                                    </Button>
                                    <Link href={'/seller/menu'} className="sm:w-32">
                                        <Button variant="ghost" className="w-full h-16 rounded-[1.25rem] font-bold text-neutral-400 uppercase tracking-widest text-xs">
                                            BATAL
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
