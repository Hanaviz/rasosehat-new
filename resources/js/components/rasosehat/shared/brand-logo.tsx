import { Link } from '@inertiajs/react';
import { Leaf } from 'lucide-react';

export default function BrandLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="size-8 gradient-healthy rounded-lg flex items-center justify-center">
                <Leaf className="size-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-600">Rasosehat</span>
        </div>
    );
}
