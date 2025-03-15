'use client';

import Link from 'next/link';
import Container from '../layout/Container';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center" id="home">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="down" duration={0.7}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Engine AI
              </span>{' '}
              Transformamos Negocios con Inteligencia Artificial
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} duration={0.7}>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Soluciones de IA personalizadas para optimizar procesos, aumentar la productividad y potenciar la innovación en tu empresa.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} duration={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/agenda">
                <Button size="lg">
                  Agenda una ConsultorIA Gratuita
                </Button>
              </Link>
              
              <Link href="/soluciones">
                <Button variant="outline" size="lg">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
} 