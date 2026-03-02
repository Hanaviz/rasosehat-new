import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Head, Link, usePage } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { PlusCircle, UtensilsCrossed, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils'; // I'll assume this helper exists or create it

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/seller/dashboard',
    },
    {
        title: 'Menu Saya',
        href: '/seller/menu',
    },
];

export default function MenuIndex({ menus }: { menus: any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Menu - Rasosehat" />

            <div className="p-4 md:p-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-emerald-600 uppercase tracking-tighter">Daftar Menu</h1>
                        <p className="text-muted-foreground">Kelola menu makanan dan minuman sehat yang Anda tawarkan.</p>
                    </div>
                    <Link href={'/seller/menu/create'}>
                        <Button className="h-12 px-6 rounded-xl gradient-healthy shadow-md font-bold flex items-center gap-2">
                            <PlusCircle className="size-5" /> TAMBAH MENU BARU
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6">
                    {menus.length === 0 ? (
                        <div className="p-20 text-center border-2 border-dashed border-emerald-100 rounded-3xl bg-white/50">
                            <UtensilsCrossed className="size-16 mx-auto text-emerald-200 mb-4" />
                            <h3 className="text-xl font-bold text-emerald-900">Belum Ada Menu</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto mt-2">Daftar menu Anda akan tampil di sini setelah Anda mengunggah menu pertama Anda.</p>
                        </div>
                    ) : (
                        menus.map((menu) => (
                            <div key={menu.id} className="bg-white dark:bg-sidebar-accent p-6 rounded-3xl shopee-shadow border border-transparent hover:border-emerald-200 transition-all flex flex-col md:flex-row gap-6">
                                <div className="size-32 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-emerald-100">
                                    {menu.image_path ? (
                                        <img src={menu.image_path} alt={menu.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <UtensilsCrossed className="size-8 text-emerald-200" />
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-black text-emerald-900 leading-tight uppercase tracking-tight">{menu.name}</h3>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {menu.categories?.map((cat: any) => (
                                                        <span key={cat.id} className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                            {cat.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-black text-emerald-600 leading-none">Rp {Number(menu.price).toLocaleString('id-ID')}</p>
                                                <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-tighter">STOK: {menu.stock}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-4 line-clamp-2">{menu.description}</p>
                                    </div>

                                    <div className="flex items-center gap-4 mt-6">
                                        {menu.is_verified ? (
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-tighter border border-emerald-200">
                                                <CheckCircle2 className="size-4" /> TERVERIFIKASI
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-tighter border border-yellow-200">
                                                <AlertCircle className="size-4" /> MENUNGGU VERIFIKASI
                                            </div>
                                        )}
                                        <div className="ml-auto flex items-center gap-2">
                                            <Button variant="ghost" className="h-9 px-4 rounded-xl font-bold text-xs uppercase tracking-widest text-emerald-600 hover:bg-emerald-50">Edit</Button>
                                            <Button variant="ghost" className="h-9 px-4 rounded-xl font-bold text-xs uppercase tracking-widest text-rose-500 hover:bg-rose-50">Hapus</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
