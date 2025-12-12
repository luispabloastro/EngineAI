'use client';

import { Link } from '@/i18n/routing';
import Container from '../layout/Container';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="pt-32 pb-24 min-h-screen flex items-center relative overflow-hidden" id="home">
      {/* Dynamic Background Elements - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse delay-75 mix-blend-screen" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection direction="down" duration={0.7}>
            {/* Main Branding - Moved Top & Centered */}
            <div className="mb-6">
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#b298dc] via-[#7042f8] to-[#00c6ff] animate-gradient-x drop-shadow-sm">
                Paradigmio
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.3)] hover:border-purple-500/50 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-200 tracking-wide uppercase">
                {t('badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              {t('titlePrefix')}{' '}
              {t('titleSuffix')}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} duration={0.7}>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {t('description')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} duration={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/agenda">
                <Button size="lg" className="group relative overflow-hidden text-lg px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full font-semibold tracking-tight">
                  <span className="relative z-10">{t('cta_secondary')}</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-purple-500/10" />
                </Button>
              </Link>

              <Link href="/soluciones">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all">
                  {t('cta_primary')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}