import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Utensils, ShoppingBag, Store, ArrowRight, Plus, Settings } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Seller Dashboard',
        href: '/seller/dashboard',
    },
];

export default function SellerDashboard() {
    const { auth } = usePage().props as any;
    const shop = auth.shop;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Seller Dashboard" />

            <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-700">
                {/* Toko Belum Aktif Alert */}
                {!shop && (
                    <div className="bg-rose-50 border-2 border-rose-100 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-rose-200/20">
                        <div className="size-16 rounded-2xl bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-300 animate-bounce">
                            <Store className="size-8" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl font-black text-rose-900 uppercase">Toko Anda Belum Aktif</h2>
                            <p className="text-rose-700/80 font-medium">Lengkapi profil usaha Anda agar menu sehat Anda dapat ditemukan oleh ribuan konsumen di Kota Padang.</p>
                        </div>
                        <Link href={'/seller/shop'}>
                            <Button className="h-14 px-8 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white border-none font-black text-lg uppercase tracking-tight shadow-lg shadow-rose-200">
                                AKTIFKAN SEKARANG <ArrowRight className="ml-2 size-5" />
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter leading-none">
                            {shop ? `Halo, ${shop.name}!` : 'Dashboard Penjual'}
                        </h1>
                        <p className="text-muted-foreground text-lg font-medium">Selamat datang kembali! Yuk pantau perkembangan bisnis sehatmu hari ini.</p>
                    </div>
                    {shop && (
                        <div className="flex gap-3">
                            <Link href={'/seller/menu/create'}>
                                <Button className="h-12 px-6 rounded-xl gradient-healthy shadow-lg shadow-emerald-200/50 border-none font-bold flex items-center gap-2">
                                    <Plus className="size-4" /> TAMBAH MENU
                                </Button>
                            </Link>
                            <Link href={'/seller/shop'}>
                                <Button variant="ghost" className="h-12 px-4 rounded-xl font-bold flex items-center gap-2 text-emerald-700">
                                    <Settings className="size-4" /> PENGATURAN TOKO
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2rem] shopee-shadow border border-emerald-50 hover:border-emerald-200 transition-all group flex flex-col justify-between min-h-[180px]">
                        <div className="flex justify-between items-start">
                            <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                                <Utensils className="size-6" />
                            </div>
                            <Link href={'/seller/menu'} className="text-[10px] font-black uppercase text-muted-foreground hover:text-emerald-500 transition-colors tracking-widest">Lihat Semua</Link>
                        </div>
                        <div className="mt-4">
                            <p className="text-4xl font-black text-emerald-950 leading-none">12</p>
                            <p className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-tighter">Total Menu Sehat</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2rem] shopee-shadow border border-blue-50 hover:border-blue-200 transition-all group flex flex-col justify-between min-h-[180px]">
                        <div className="flex justify-between items-start">
                            <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                                <ShoppingBag className="size-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-4xl font-black text-blue-950 leading-none">3</p>
                            <p className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-tighter">Pesanan Baru (Bulan Ini)</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2rem] shopee-shadow border border-yellow-50 hover:border-yellow-200 transition-all group flex flex-col justify-between min-h-[180px]">
                        <div className="flex justify-between items-start">
                            <div className="size-12 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                                <Store className="size-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-4xl font-black text-yellow-950 leading-none">4.9</p>
                            <p className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-tighter">Rating Rata-rata Pelanggan</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity / Placeholder Area */}
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 bg-white dark:bg-sidebar-accent rounded-[2.5rem] shopee-shadow p-8 border border-neutral-50 min-h-[300px]">
                        <h2 className="text-xl font-black text-neutral-900 border-b pb-4 mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                            Aktivitas Terbaru
                        </h2>
                        <div className="flex flex-col items-center justify-center py-12 text-center opacity-40">
                            <ShoppingBag className="size-12 mb-4" />
                            <p className="font-bold text-lg">Belum ada pesanan masuk dalam 24 jam terakhir.</p>
                            <p className="text-sm max-w-xs mx-auto mt-1">Sembari menunggu, yuk periksa ketersediaan stok menu Anda.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-2xl">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black leading-[1.1]">Tips Jualan Sehat <br /><span className="text-emerald-400">#TipsRasosehat</span></h2>
                            <p className="text-emerald-100/70 font-medium">Lengkapi foto menu dengan pencahayaan yang bagus agar calon pembeli semakin yakin dengan kualitas masakan Anda.</p>
                        </div>
                        <Button className="bg-white text-emerald-900 hover:bg-emerald-100 h-12 rounded-xl font-bold border-none w-full mt-8">
                            BACA TIPS LAINNYA
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
