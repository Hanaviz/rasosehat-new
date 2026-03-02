import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import type { User } from '@/types';

export function UserInfo({
    user,
    showEmail = false,
}: {
    user: User | null;
    showEmail?: boolean;
}) {
    const getInitials = useInitials();

    const name = user?.name ?? 'Tamu';
    const avatar = user?.avatar ?? '';
    const email = user?.email ?? 'mode-terbatas@rasosehat.com';

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium uppercase text-[10px] tracking-widest">{name}</span>
                {showEmail && (
                    <span className="truncate text-xs text-muted-foreground">
                        {email}
                    </span>
                )}
            </div>
        </>
    );
}
