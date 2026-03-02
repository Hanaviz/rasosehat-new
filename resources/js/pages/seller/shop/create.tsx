import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/seller/dashboard',
    },
    {
        title: 'Aktifkan Toko',
        href: '/seller/shop',
    },
];

export default function CreateShop() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        address: '',
        description: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/seller/shop');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Aktifkan Toko - Rasosehat" />

            <div className="max-w-2xl mx-auto p-4 md:p-8">
                <div className="bg-white dark:bg-sidebar glass-effect p-8 rounded-[2rem] shadow-xl border-emerald-50/50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-emerald-600 uppercase tracking-tighter">Profil Usaha</h1>
                        <p className="text-muted-foreground mt-2">Lengkapi data usaha Anda untuk mulai berjualan menu sehat di Rasosehat.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Nama Brand / Toko</Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Contoh: Salad Padang Sehat"
                                className="h-14 rounded-2xl border-muted focus:border-emerald-500 shadow-sm transition-all"
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="address" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Alamat di Kota Padang</Label>
                            <Input
                                id="address"
                                value={data.address}
                                onChange={e => setData('address', e.target.value)}
                                placeholder="Jln. Sudirman No. 10..."
                                className="h-14 rounded-2xl border-muted focus:border-emerald-500 shadow-sm transition-all"
                            />
                            <InputError message={errors.address} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description" className="px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Tentang Usaha (Opsional)</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                placeholder="Tuliskan cerita singkat tentang menu sehat Anda..."
                                className="min-h-[120px] rounded-2xl border-muted focus:border-emerald-500 shadow-sm transition-all py-4"
                            />
                            <InputError message={errors.description} />
                        </div>

                        <Button
                            disabled={processing}
                            type="submit"
                            className="w-full h-14 rounded-2xl gradient-healthy shadow-lg shadow-emerald-200/50 font-black text-lg uppercase transition-all hover:scale-[1.01]"
                        >
                            AKTIFKAN TOKO SAYA
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
