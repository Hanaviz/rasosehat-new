import { Form, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Spinner } from '@/components/ui/spinner';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { ShieldCheck } from 'lucide-react';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { register } from '@/routes';

export default function LoginFormCard({ canResetPassword, canRegister }: { canResetPassword: boolean, canRegister: boolean }) {
    return (
        <div className="glass-effect p-8 rounded-[2rem] shadow-xl border-white dark:border-white/5 space-y-6">
            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2 group/input">
                                <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-muted-foreground group-focus-within/input:text-emerald-500 transition-colors">
                                    Alamat Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="budi@sehat.com"
                                    className="h-14 px-6 rounded-2xl bg-white dark:bg-sidebar-accent border-muted shadow-sm hover:border-emerald-300 focus:border-emerald-500 transition-all text-lg font-medium"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2 group/input">
                                <div className="flex items-center justify-between px-1">
                                    <Label htmlFor="password" className="font-bold text-xs uppercase tracking-widest text-muted-foreground group-focus-within/input:text-emerald-500 transition-colors">
                                        Kata Sandi
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 decoration-emerald-200 underline-offset-4"
                                            tabIndex={5}
                                        >
                                            Lupa Sandi?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className="h-14 px-6 rounded-2xl bg-white dark:bg-sidebar-accent border-muted shadow-sm hover:border-emerald-300 focus:border-emerald-500 transition-all text-lg"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3 px-1 group/check">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="size-5 rounded-lg border-2 border-muted data-[state=checked]:bg-emerald-500 data-[state=checked]:border-none shadow-sm transition-colors"
                                />
                                <Label htmlFor="remember" className="text-sm font-semibold select-none group-hover/check:text-emerald-600 transition-colors cursor-pointer">
                                    Ingat Saya
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="h-14 rounded-2xl gradient-healthy shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/60 border-none transition-all duration-300 font-black text-lg tracking-wide uppercase mt-4"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing ? <Spinner className="mr-2" /> : <ShieldCheck className="mr-2 size-5" />}
                                Masuk Sekarang
                            </Button>
                        </div>
                    </>
                )}
            </Form>

            {canRegister && (
                <div className="text-center pt-4">
                    <p className="text-muted-foreground font-semibold">
                        Belum punya akun?{' '}
                        <TextLink href={register()} className="text-emerald-600 font-black decoration-2 underline-offset-8 decoration-emerald-100 hover:decoration-emerald-500 transition-all" tabIndex={5}>
                            Daftar Sekarang
                        </TextLink>
                    </p>
                </div>
            )}
        </div>
    );
}
