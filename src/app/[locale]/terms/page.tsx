'use client';

import Container from '@/components/layout/Container';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
    const t = useTranslations('Terms');

    return (
        <div className="pt-32 pb-20 relative overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <Container>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('title')}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                    </div>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 space-y-8 text-slate-300 font-light leading-relaxed">
                        <p className="text-lg">
                            {t('introduction')}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block">
                                {t('sections.userObligations.title')}
                            </h2>
                            <p>{t('sections.userObligations.content')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block">
                                {t('sections.intellectualProperty.title')}
                            </h2>
                            <p>{t('sections.intellectualProperty.content')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block">
                                {t('sections.limitations.title')}
                            </h2>
                            <p>{t('sections.limitations.content')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline-block">
                                {t('sections.contact.title')}
                            </h2>
                            <p>{t('sections.contact.content')}</p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
