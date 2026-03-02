import { Head, usePage } from '@inertiajs/react';
import Navbar from '@/components/rasosehat/shared/navbar';
import Footer from '@/components/rasosehat/shared/footer';
import WelcomeHero from '@/components/rasosehat/welcome/hero';
import WhyRasosehat from '@/components/rasosehat/welcome/why-rasosehat';
import Storytelling from '@/components/rasosehat/welcome/storytelling';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Head title="Rasosehat - Makanan Sehat Padang" />

            <WelcomeHero />

            <WhyRasosehat />

            <Storytelling />

            <Footer />
        </div>
    );
}
