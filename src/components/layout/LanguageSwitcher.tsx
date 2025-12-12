'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {
            // Pathname usually includes the locale, e.g. /en/services or /es/services
            // We need to replace the current locale segment with the new one
            // OR if we are using next-intl navigation 'Link' it handles it, but for a switcher
            // direct manipulation is often easier if we don't have the localized pathnames map handy everywhere.
            // However, simplified approach: if path starts with /en, replace with /es, etc.

            let newPath = pathname;
            const segments = pathname.split('/');
            // segments[0] is empty, segments[1] is locale

            if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'es')) {
                segments[1] = nextLocale;
                newPath = segments.join('/');
            } else {
                // If for some reason locale is missing (shouldn't with middleware), prepend it
                newPath = `/${nextLocale}${pathname}`;
            }

            router.replace(newPath);
        });
    }

    return (
        <div className="relative group">
            <button
                className="flex items-center space-x-1 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Change language"
            >
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium uppercase">{locale}</span>
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-md border border-purple-800/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                <div className="py-1">
                    <button
                        onClick={() => onSelectChange('en')}
                        disabled={isPending || locale === 'en'}
                        className={`block w-full text-left px-4 py-2 text-sm ${locale === 'en' ? 'text-purple-400 font-bold' : 'text-gray-300 hover:bg-white/10'}`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => onSelectChange('es')}
                        disabled={isPending || locale === 'es'}
                        className={`block w-full text-left px-4 py-2 text-sm ${locale === 'es' ? 'text-purple-400 font-bold' : 'text-gray-300 hover:bg-white/10'}`}
                    >
                        Español
                    </button>
                </div>
            </div>
        </div>
    );
}
