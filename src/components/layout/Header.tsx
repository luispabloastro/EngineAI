'use client';

import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import Container from './Container';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const isAgendaPage = pathname === '/agenda';
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-[#030014]/70 backdrop-blur-md border-b border-white/10"></div>
      <Container>
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14">
              <Image
                src="/engineailogo.png"
                alt="Paradigmio Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(112,66,248,0.5)] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary transition-all duration-300">
              Paradigmio
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <LanguageSwitcher />

            {!isAgendaPage && (
              <Link
                href="/agenda"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950/90 transition-colors">
                  {t('cta')}
                </span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
} 