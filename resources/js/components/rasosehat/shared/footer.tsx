import { Leaf } from 'lucide-react';
import ScrollReveal from '@/components/rasosehat/shared/scroll-reveal';

export default function Footer() {
    return (
        <footer className="py-12 border-t text-sm text-center text-muted-foreground bg-white dark:bg-sidebar/30">
            <div className="max-w-7xl mx-auto px-4">
                <ScrollReveal variant="fadeUp" duration={600}>
                    <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                        <div className="size-6 gradient-healthy rounded flex items-center justify-center">
                            <Leaf className="size-4 text-white" />
                        </div>
                        <span className="font-bold text-emerald-600">Rasosehat</span>
                    </div>
                    <p>&copy; 2024 Rasosehat Platform Kota Padang. Dibuat dengan cinta untuk kesehatan Anda.</p>
                </ScrollReveal>
            </div>
        </footer>
    );
}
