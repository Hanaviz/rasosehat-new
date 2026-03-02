import { Link, usePage } from '@inertiajs/react';
import {
    LayoutGrid,
    Utensils,
    ShoppingBag,
    Store,
    TrendingUp,
    Users,
    ShieldCheck,
    Settings,
    Headset
} from 'lucide-react';
import BrandLogo from '@/components/rasosehat/shared/brand-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

export function AppSidebar() {
    const { auth } = usePage().props as any;
    const userRole = auth.user?.role || 'user';

    // Navigation for Sellers
    const sellerNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/seller/dashboard',
            icon: LayoutGrid,
        },
        {
            title: 'Menu Saya',
            href: '/seller/menu',
            icon: Utensils,
        },
        {
            title: 'Pesanan Masuk',
            href: '/seller/orders', // to be implemented
            icon: ShoppingBag,
        },
        {
            title: 'Toko Saya',
            href: '/seller/shop',
            icon: Store,
        },
        {
            title: 'Statistik Bisnis',
            href: '/seller/stats', // to be implemented
            icon: TrendingUp,
        },
    ];

    // Navigation for Admins
    const adminNavItems: NavItem[] = [
        {
            title: 'Dashboard Admin',
            href: '/admin/dashboard',
            icon: LayoutGrid,
        },
        {
            title: 'Verifikasi Seller',
            href: '/admin/verification', // to be implemented
            icon: ShieldCheck,
        },
        {
            title: 'Kelola Pengguna',
            href: '/admin/users', // to be implemented
            icon: Users,
        },
    ];

    // Navigation for Regular Users
    const userNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        },
        {
            title: 'Pesanan Saya',
            href: '/user/orders', // to be implemented
            icon: ShoppingBag,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: 'Bantuan & Support',
            href: '/support',
            icon: Headset,
        },
        {
            title: 'Pengaturan',
            href: '/settings/profile',
            icon: Settings,
        },
    ];

    const getNavItems = () => {
        switch (userRole) {
            case 'admin': return adminNavItems;
            case 'seller': return sellerNavItems;
            default: return userNavItems;
        }
    };

    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r-0">
            <SidebarHeader className="py-6">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
                            <Link href="/">
                                <BrandLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="px-4 py-2">
                <NavMain items={getNavItems()} />
            </SidebarContent>

            <SidebarFooter className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10">
                <NavFooter items={footerNavItems} className="mb-4" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
