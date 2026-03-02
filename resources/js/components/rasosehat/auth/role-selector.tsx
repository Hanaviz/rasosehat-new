import { UserCircle2, Store } from 'lucide-react';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

export default function RoleSelector({
    value,
    onChange,
    error
}: {
    value: string;
    onChange: (val: string) => void;
    error?: string
}) {
    return (
        <div className="grid gap-3">
            <Label className="font-black text-sm uppercase tracking-widest text-emerald-700/60 dark:text-emerald-500/60 transition-colors px-1">
                Mendaftar Sebagai:
            </Label>
            <div className="grid grid-cols-2 gap-4">
                <label
                    className={`relative flex flex-col items-center p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:border-emerald-300 ${value === 'user' ? 'border-emerald-500 bg-emerald-50' : 'border-neutral-200'}`}
                    onClick={() => onChange('user')}
                >
                    <input type="radio" name="role" value="user" checked={value === 'user'} readOnly className="absolute opacity-0" />
                    <UserCircle2 className={`size-8 mb-2 ${value === 'user' ? 'text-emerald-600' : 'text-muted-foreground'} transition-colors`} />
                    <span className={`font-black text-sm ${value === 'user' ? 'text-emerald-900' : 'text-neutral-500'}`}>KONSUMEN</span>
                    <span className={`text-[10px] uppercase font-bold ${value === 'user' ? 'text-emerald-600' : 'text-muted-foreground'} tracking-tighter`}>BELI MAKANAN</span>
                </label>
                <label
                    className={`relative flex flex-col items-center p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 hover:border-emerald-300 ${value === 'seller' ? 'border-emerald-500 bg-emerald-50' : 'border-neutral-200'}`}
                    onClick={() => onChange('seller')}
                >
                    <input type="radio" name="role" value="seller" checked={value === 'seller'} readOnly className="absolute opacity-0" />
                    <Store className={`size-8 mb-2 ${value === 'seller' ? 'text-emerald-600' : 'text-muted-foreground'} transition-colors`} />
                    <span className={`font-black text-sm ${value === 'seller' ? 'text-emerald-900' : 'text-neutral-500'}`}>PENJUAL</span>
                    <span className={`text-[10px] uppercase font-bold ${value === 'seller' ? 'text-emerald-600' : 'text-muted-foreground'} tracking-tighter`}>JUAL MENU</span>
                </label>
            </div>
            {error && <InputError message={error} />}
        </div>
    );
}
