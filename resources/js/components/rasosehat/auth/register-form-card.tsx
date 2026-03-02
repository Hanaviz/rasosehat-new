import { useForm, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import InputError from '@/components/input-error';
import { ShieldEllipsis } from 'lucide-react';
import { login } from '@/routes';
import RoleSelector from './role-selector';

export default function RegisterFormCard() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: 'user',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="glass-effect p-8 md:p-12 rounded-[3rem] shadow-2xl border-emerald-100 dark:border-white/5 space-y-8 shopee-shadow relative overflow-hidden">
            <form onSubmit={submit} className="flex flex-col gap-6 relative z-10">
                <RoleSelector
                    value={data.role}
                    onChange={(val) => setData('role', val)}
                    error={errors.role}
                />

                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Nama Lengkap</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoFocus
                            autoComplete="name"
                            placeholder="Contoh: Budi Santoso"
                            className="h-14 px-6 rounded-2xl border-muted bg-white dark:bg-sidebar-accent shadow-sm focus:border-emerald-500 text-lg font-medium"
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Alamat Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="email"
                            placeholder="budi@email.com"
                            className="h-14 px-6 rounded-2xl border-muted bg-white dark:bg-sidebar-accent shadow-sm focus:border-emerald-500 text-lg font-medium"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Kata Sandi</Label>
                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                autoComplete="new-password"
                                placeholder="••••••••"
                                className="h-14 rounded-2xl border-muted bg-white dark:bg-sidebar-accent shadow-sm focus:border-emerald-500 text-lg font-medium px-6"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Konfirmasi</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                                autoComplete="new-password"
                                placeholder="••••••••"
                                className="h-14 rounded-2xl border-muted bg-white dark:bg-sidebar-accent shadow-sm focus:border-emerald-500 text-lg font-medium px-6"
                            />
                            <InputError message={errors.password_confirmation} />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={processing}
                        className="h-16 mt-4 rounded-2xl gradient-healthy shadow-xl shadow-emerald-200/50 hover:shadow-emerald-300 border-none font-black text-xl tracking-wide transition-all"
                    >
                        {processing ? <Spinner className="mr-2" /> : <ShieldEllipsis className="mr-2 size-6" />}
                        GABUNG SEKARANG
                    </Button>
                </div>

                <div className="text-center pt-2">
                    <p className="text-muted-foreground font-bold">
                        Sudah punya akun?{' '}
                        <Link href={login()} className="text-emerald-600 font-extrabold">
                            Log in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
