'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { startTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={toggleLanguage}
                className="glass-button px-4 py-2 rounded-full text-sm font-medium tracking-wide hover:text-secondary hover:border-secondary transition-all flex items-center gap-2"
                aria-label="Switch Language"
            >
                <span className={locale === 'en' ? 'text-white' : 'text-gray-400'}>EN</span>
                <span className="w-[1px] h-3 bg-white/20"></span>
                <span className={locale === 'es' ? 'text-white' : 'text-gray-400'}>ESP</span>
            </button>
        </div>
    );
}
