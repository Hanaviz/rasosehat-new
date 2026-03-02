import { Link } from '@inertiajs/react';
import { login, register, dashboard } from '@/routes';
import { Button } from '@/components/ui/button';
import {
    LayoutDashboard,
    User,
    Settings,
    LogOut
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BrandLogo from './brand-logo';

export default function Navbar({ auth, hideAuth }: { auth: any, hideAuth?: boolean }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <BrandLogo />
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-emerald-500 transition-colors border-b-2 border-transparent hover:border-emerald-500 py-1 transition-all">Beranda</Link>
                    <Link href="/orders" className="hover:text-emerald-500 transition-colors border-b-2 border-transparent hover:border-emerald-500 py-1 transition-all">Pesanan Saya</Link>
                    <Link href="/favorites" className="hover:text-emerald-500 transition-colors border-b-2 border-transparent hover:border-emerald-500 py-1 transition-all">Menu Favorit</Link>
                </div>

                <div className="flex items-center gap-3">
                    {auth?.user ? (
                        <DropdownMenu>
                            {/* Authenticated User Menu */}
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 outline-none group">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-xs font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">
                                            {auth.user.name}
                                        </p>
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">
                                            {auth.user.role}
                                        </p>
                                    </div>
                                    <Avatar className="size-10 border-2 border-emerald-100 group-hover:border-emerald-500 transition-colors shadow-sm">
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                        <AvatarFallback className="bg-emerald-500 text-white font-black text-xs">
                                            {auth.user.name.split(' ').map((n: any) => n[0]).join('').toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 bg-white/95 backdrop-blur-md border-emerald-100 shadow-2xl">
                                <DropdownMenuLabel className="px-3 py-2">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Akun Saya</p>
                                    <p className="text-sm font-black text-emerald-950 truncate uppercase tracking-tight italic">{auth.user.email}</p>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-emerald-50" />
                                <DropdownMenuItem asChild className="rounded-xl focus:bg-emerald-50 focus:text-emerald-600 transition-colors">
                                    <Link href={dashboard()} className="flex items-center gap-3 px-3 py-2 cursor-pointer font-bold text-xs uppercase tracking-widest">
                                        <LayoutDashboard className="size-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="rounded-xl focus:bg-emerald-50 focus:text-emerald-600 transition-colors">
                                    <Link href="/profile" className="flex items-center gap-3 px-3 py-2 cursor-pointer font-bold text-xs uppercase tracking-widest">
                                        <User className="size-4" />
                                        Profil
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="rounded-xl focus:bg-emerald-50 focus:text-emerald-600 transition-colors">
                                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2 cursor-pointer font-bold text-xs uppercase tracking-widest">
                                        <Settings className="size-4" />
                                        Pengaturan
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-emerald-50" />
                                <DropdownMenuItem asChild className="rounded-xl focus:bg-rose-50 focus:text-rose-600 transition-colors">
                                    <Link href="/logout" method="post" as="button" className="w-full flex items-center gap-3 px-3 py-2 cursor-pointer font-bold text-xs uppercase tracking-widest">
                                        <LogOut className="size-4" />
                                        Keluar
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        hideAuth ? (
                            <div className="flex items-center gap-2 outline-none group opacity-80 cursor-default">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">
                                        Halo, Tamu!
                                    </p>
                                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-0.5">
                                        Mode Terbatas
                                    </p>
                                </div>
                                <Avatar className="size-10 border-2 border-dashed border-emerald-200 shadow-sm bg-neutral-50 flex items-center justify-center">
                                    <User className="size-5 text-neutral-400" />
                                </Avatar>
                            </div>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-2 outline-none group">
                                        <div className="text-right hidden sm:block">
                                            <p className="text-xs font-black text-emerald-950 dark:text-white uppercase tracking-tighter leading-none">
                                                Halo, Tamu!
                                            </p>
                                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-0.5">
                                                Mode Terbatas
                                            </p>
                                        </div>
                                        <Avatar className="size-10 border-2 border-dashed border-emerald-200 group-hover:border-emerald-500 transition-colors shadow-sm bg-neutral-50 flex items-center justify-center">
                                            <User className="size-5 text-neutral-400" />
                                        </Avatar>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2 bg-white/95 backdrop-blur-md border-emerald-100 shadow-2xl">
                                    <DropdownMenuLabel className="px-3 py-2">
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Akses Guest</p>
                                        <p className="text-sm font-black text-emerald-950 truncate uppercase tracking-tight italic">Ingin Full Akses?</p>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-emerald-50" />
                                    <div className="p-2 space-y-2">
                                        <p className="text-[11px] text-muted-foreground font-medium italic mb-3">Login untuk simpan preferensi, beri rating, dan lakukan pemesanan makanan sehat.</p>
                                        <Link href={login()} className="block">
                                            <Button className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200">
                                                Login Sekarang
                                            </Button>
                                        </Link>
                                        <Link href={register()} className="block">
                                            <Button variant="outline" className="w-full h-11 rounded-xl border-emerald-200 text-emerald-600 hover:bg-emerald-50 font-black text-xs uppercase tracking-widest">
                                                Daftar Akun
                                            </Button>
                                        </Link>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}
