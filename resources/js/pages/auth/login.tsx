import { Head, Link } from '@inertiajs/react';
import BrandLogo from '@/components/rasosehat/shared/brand-logo';
import AuthInfoSection from '@/components/rasosehat/auth/auth-info-section';
import LoginFormCard from '@/components/rasosehat/auth/login-form-card';
import { HeartPulse } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-background dark:bg-sidebar text-foreground selection:bg-emerald-100 selection:text-emerald-900">
            <Head title="Log in" />

            {/* Left Side: Form */}
            <div className="flex flex-col items-center justify-center p-8 md:p-12 animate-in fade-in slide-in-from-left duration-700">
                <div className="w-full max-w-sm space-y-10 group">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4 group-hover:-rotate-2 transition-transform">
                        <BrandLogo className="!gap-3 [&_span]:text-2xl [&_span]:font-extrabold [&_div]:shadow-lg [&_div]:shadow-emerald-200/50" />
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-black tracking-tight flex items-center gap-2 leading-none">
                            Selamat Datang Kembali <HeartPulse className="size-8 text-rose-500 animate-pulse" />
                        </h1>
                        <p className="text-muted-foreground font-medium text-lg leading-snug">
                            Rasakan kembali kenikmatan makanan sehat yang telah Anda temukan.
                        </p>
                    </div>

                    <LoginFormCard canRegister={canRegister} canResetPassword={canResetPassword} />
                </div>
            </div>

            {/* Right Side: Info & Marketing (Premium Glass Card) */}
            <div className="hidden lg:flex items-center justify-center p-12 bg-emerald-950 relative overflow-hidden">
                {/* Background Decor Layer */}
                <div className="absolute inset-0 z-0">
                    <img src="/healthy_food_hero_1772268576019.png" className="w-full h-full object-cover opacity-10 blur-sm scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-emerald-950 to-emerald-900/90" />
                </div>

                <AuthInfoSection
                    title={<>Nutrisi Tepat, <br /> Hidup Lebih <span className="text-emerald-400">Hebat.</span></>}
                    quote="Rasosehat benar-benar mempermudah saya menemukan menu diet harian di Padang. Sangat direkomendasikan!"
                    author="ANISA RAHMA — PEJUANG SEHAT"
                />
            </div>

            {status && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-effect px-8 py-4 rounded-2xl shadow-2xl border-emerald-500/20 text-emerald-600 font-bold animate-in slide-in-from-bottom duration-500">
                    {status}
                </div>
            )}
        </div>
    );
}
