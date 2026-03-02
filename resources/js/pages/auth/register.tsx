import { Head, Link } from '@inertiajs/react';
import BrandLogo from '@/components/rasosehat/shared/brand-logo';
import RegisterFormCard from '@/components/rasosehat/auth/register-form-card';
import { Heart, Sparkles } from 'lucide-react';

export default function Register() {
    return (
        <div className="min-h-screen bg-background dark:bg-sidebar text-foreground selection:bg-emerald-100 selection:text-emerald-900 border-t-8 border-emerald-500">
            <Head title="Register" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 min-h-screen">
                {/* Left Side: Info & Marketing */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-16 animate-in slide-in-from-left duration-1000">
                    <div className="space-y-8">
                        <Link href="/">
                            <BrandLogo className="!gap-3 [&_span]:text-3xl [&_span]:font-black [&_div]:size-12 [&_div]:shadow-xl [&_div]:shadow-emerald-200/50 [&_svg]:size-7" />
                        </Link>

                        <div className="space-y-4 pt-12">
                            <h2 className="text-5xl font-black leading-tight tracking-tight">Kesehatan Anda, <br /> Prioritas Kami.</h2>
                            <p className="text-xl text-muted-foreground font-medium max-w-sm leading-relaxed">
                                Bergabunglah dengan platform kuliner sehat terdepan di Padang.
                            </p>
                        </div>

                        <div className="space-y-6 pt-12">
                            <div className="flex items-center gap-4 group cursor-help">
                                <div className="size-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <Sparkles className="size-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Automated Labeling</p>
                                    <p className="text-sm text-muted-foreground font-medium">Sistem pintar melabeli kalori dan protein menu Anda.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-help">
                                <div className="size-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <Heart className="size-6 fill-current" />
                                </div>
                                <div>
                                    <p className="font-bold">Trusted Merchants</p>
                                    <p className="text-sm text-muted-foreground font-medium">Hanya restoran tersertifikasi yang boleh bergabung.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 opacity-40">
                        <img src="/protein_category_mockup_1772268595255.png" className="w-full rounded-[3rem] grayscale blur-[2px]" />
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 bg-white dark:bg-sidebar-accent shadow-2xl rounded-l-[4rem] animate-in slide-in-from-right duration-700">
                    <div className="w-full max-w-lg space-y-10 group">

                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl font-black tracking-tight leading-none">
                                Buat Akun Sehat Anda.
                            </h1>
                            <p className="text-muted-foreground font-semibold text-lg max-w-sm">
                                Pilih peran Anda dan mulai perjalanan sehat hari ini.
                            </p>
                        </div>

                        <RegisterFormCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
