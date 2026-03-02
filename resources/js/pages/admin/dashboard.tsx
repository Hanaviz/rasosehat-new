import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ShieldCheck, Users, Utensils, AlertCircle, TrendingUp, CheckCircle, ArrowRight, Activity } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

export default function AdminDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />

            <div className="p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header with Background Accent */}
                <div className="relative overflow-hidden bg-emerald-950 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full -ml-10 -mb-10 blur-2xl opacity-30" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck className="size-3" /> Panel Kendali Verifikator
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
                                Panel Admin
                            </h1>
                            <p className="text-emerald-100/60 text-lg font-medium max-w-lg">Menjaga standar kualitas dan kesehatan masyarakat Kota Padang melalui verifikasi teliti.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-xl px-6 py-4 rounded-[1.5rem] border border-white/10 text-center">
                                <p className="text-3xl font-black italic">24</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Total Toko</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl px-6 py-4 rounded-[1.5rem] border border-white/10 text-center">
                                <p className="text-3xl font-black italic">142</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Menu Sehat</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2.5rem] shopee-shadow border border-emerald-50 hover:border-emerald-200 transition-all group relative overflow-hidden">
                        <div className="size-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm">
                            <ShieldCheck className="size-7" />
                        </div>
                        <p className="text-4xl font-black text-emerald-950 tracking-tighter leading-none italic">5</p>
                        <p className="text-[10px] font-black text-muted-foreground mt-2 uppercase tracking-[0.2em]">Penjual Pending</p>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <ShieldCheck className="size-20 -mr-6 -mt-6" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2.5rem] shopee-shadow border border-orange-50 hover:border-orange-200 transition-all group relative overflow-hidden">
                        <div className="size-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm">
                            <Utensils className="size-7" />
                        </div>
                        <p className="text-4xl font-black text-orange-950 tracking-tighter leading-none italic">12</p>
                        <p className="text-[10px] font-black text-muted-foreground mt-2 uppercase tracking-[0.2em]">Menu Perlu Review</p>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Utensils className="size-20 -mr-6 -mt-6" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2.5rem] shopee-shadow border border-blue-50 hover:border-blue-200 transition-all group relative overflow-hidden">
                        <div className="size-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm">
                            <Users className="size-7" />
                        </div>
                        <p className="text-4xl font-black text-blue-950 tracking-tighter leading-none italic">156</p>
                        <p className="text-[10px] font-black text-muted-foreground mt-2 uppercase tracking-[0.2em]">Total Konsumen</p>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="size-20 -mr-6 -mt-6" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-sidebar-accent p-8 rounded-[2.5rem] shopee-shadow border border-purple-50 hover:border-purple-200 transition-all group relative overflow-hidden">
                        <div className="size-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm">
                            <TrendingUp className="size-7" />
                        </div>
                        <p className="text-4xl font-black text-purple-950 tracking-tighter leading-none italic">8.2k</p>
                        <p className="text-[10px] font-black text-muted-foreground mt-2 uppercase tracking-[0.2em]">Kunjungan</p>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <TrendingUp className="size-20 -mr-6 -mt-6" />
                        </div>
                    </div>
                </div>

                {/* Action & Feed Section */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Activity Feed */}
                    <div className="lg:col-span-3 bg-white dark:bg-sidebar-accent rounded-[3.5rem] shopee-shadow p-10 border border-neutral-50 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-10 border-b border-neutral-100 pb-6">
                            <h2 className="text-sm font-black text-neutral-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Activity className="size-4 text-emerald-500" /> Antrian Verifikasi Terbaru
                            </h2>
                            <button className="text-[10px] font-black uppercase text-emerald-600 hover:text-emerald-700 transition-colors tracking-widest flex items-center gap-1 group">
                                LIHAT SEMUA <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: "Katering Sehat Seroja", time: "2 jam yang lalu", type: "Toko Baru" },
                                { name: "Salad Buah Padang", time: "5 jam yang lalu", type: "Menu Baru" },
                                { name: "Healthy Bowl Bypass", time: "Kemarin", type: "Toko Baru" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-neutral-50 dark:bg-white/5 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/50 transition-all cursor-pointer group">
                                    <div className="flex items-center gap-5">
                                        <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg italic shadow-sm">
                                            {item.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-black text-neutral-900 uppercase tracking-tight">{item.name}</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/10">
                                                    {item.type}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground font-medium">{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-md group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <CheckCircle className="size-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Analytics Tool */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-neutral-50 to-emerald-50 dark:from-neutral-900 dark:to-neutral-800 rounded-[3.5rem] p-10 border border-neutral-100 dark:border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
                        <div className="absolute top-0 right-0 size-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />

                        <div className="relative z-10">
                            <div className="size-24 bg-white dark:bg-neutral-800 rounded-[2.5rem] shopee-shadow flex items-center justify-center mb-8 mx-auto -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Activity className="size-12 text-emerald-500 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-none mb-3 italic">Sirkuit Analitik Gizi</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto text-sm font-medium leading-relaxed">Sistem sedang memantau komposisi resep dari seller. Hasil kalkulasi nutrisi akan divalidasi oleh Anda sebelum diverifikasi.</p>

                            <div className="mt-12 space-y-3">
                                <div className="h-1.5 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden mx-auto">
                                    <div className="h-full w-2/3 bg-emerald-500 rounded-full animate-progress" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">67% Selesai Diproses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
