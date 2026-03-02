import Navbar from '@/components/rasosehat/shared/navbar';
import Footer from '@/components/rasosehat/shared/footer';
import { Head, usePage } from '@inertiajs/react';

export default function ConsumerLayout({ children, title }: { children: React.ReactNode; title?: string }) {
    const { auth } = usePage().props as any;

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            {title && <Head title={`${title} - Rasosehat`} />}

            <Navbar auth={auth} />

            <main className="flex-1 pt-16">
                {children}
            </main>

            <Footer />
        </div>
    );
}
