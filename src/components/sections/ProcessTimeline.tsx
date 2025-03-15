'use client';

import Container from '../layout/Container';
import { cn } from 'myapp-LP@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProcessTimeline() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Consultoría Inicial',
      description: 'Analizamos tu negocio para identificar oportunidades de implementación de IA.'
    },
    {
      number: '02',
      title: 'Diseño de Solución',
      description: 'Creamos una propuesta personalizada basada en tus necesidades específicas.'
    },
    {
      number: '03',
      title: 'Desarrollo',
      description: 'Implementamos la solución utilizando las tecnologías de IA más avanzadas.'
    },
    {
      number: '04',
      title: 'Integración',
      description: 'Conectamos la solución con tus sistemas existentes para un funcionamiento fluido.'
    },
    {
      number: '05',
      title: 'Soporte Continuo',
      description: 'Ofrecemos mantenimiento y mejoras continuas para optimizar el rendimiento.'
    }
  ];

  return (
    <section className="py-20 border-t border-purple-800/30" id="process">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Funciona</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nuestro proceso está diseñado para garantizar soluciones efectivas y adaptadas a tus necesidades.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-800/50 transform -translate-x-1/2 hidden md:block" />
          
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.2}
              className={cn(
                "relative mb-12 md:mb-24 flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Circle with number - always centered */}
              <motion.div 
                className={cn(
                  "absolute left-1/2 transform -translate-x-1/2 top-0 w-10 h-10 rounded-full border-4 border-black flex items-center justify-center z-10 transition-colors duration-300",
                  hoveredStep === index ? "bg-purple-600" : "bg-transparent border-purple-600"
                )}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <span className="text-xs font-bold text-white">{step.number}</span>
              </motion.div>
              
              {/* Content */}
              <motion.div 
                className={cn(
                  "w-full md:w-1/2 pt-16 md:pt-0 transition-colors duration-300",
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                )}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <h3 className={cn(
                  "text-xl font-bold mb-2 transition-colors duration-300",
                  hoveredStep === index ? "text-white" : "text-blue-400"
                )}>
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block w-1/2" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
} 