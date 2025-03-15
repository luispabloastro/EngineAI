'use client';

import { Bot, Cpu, Code } from 'lucide-react';
import Container from '../layout/Container';
import Card, { CardTitle, CardDescription } from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      icon: <Bot className="h-10 w-10 text-purple-400" />,
      title: 'Agentes de IA',
      description: 'Asistentes virtuales inteligentes que automatizan la atención al cliente y optimizan procesos internos con disponibilidad 24/7.'
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-400" />,
      title: 'Automatizaciones con IA',
      description: 'Flujos de trabajo automatizados que reducen tareas repetitivas, minimizan errores y aumentan la eficiencia operativa.'
    },
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: 'Software con IA',
      description: 'Desarrollo de aplicaciones personalizadas con inteligencia artificial integrada para resolver problemas específicos de tu negocio.'
    }
  ];

  return (
    <section className="py-20 border-t border-purple-800/30" id="solutions">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Soluciones</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Implementamos tecnologías de IA avanzadas adaptadas a las necesidades específicas de tu empresa.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="h-full">
                <motion.div 
                  className="flex flex-col items-center text-center h-full"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card 
                    borderTop 
                    className="flex flex-col items-center text-center h-full group transition-all duration-300 hover:border-purple-400 hover:bg-white/10"
                  >
                    <motion.div 
                      className="mb-4 p-3 bg-purple-900/30 rounded-full transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(139, 92, 246, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {solution.icon}
                    </motion.div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
} 