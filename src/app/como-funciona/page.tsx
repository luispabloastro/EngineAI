import ProcessTimeline from "myapp-LP@/components/sections/ProcessTimeline";
import Container from "myapp-LP@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Card from "myapp-LP@/components/ui/Card";

export const metadata = {
  title: "Cómo Funciona Nuestra IA | Engine AI",
  description: "Conoce nuestro proceso de implementación de soluciones de IA para tu negocio: desde la consultoría inicial hasta el soporte continuo.",
};

export default function ComoFuncionaPage() {
  const testimonials = [
    {
      name: "María Rodríguez",
      company: "Directora de Innovación, TechSolutions",
      quote: "El proceso de implementación fue impecable. Desde la primera consultoría hasta la integración final, el equipo demostró un profundo conocimiento y profesionalismo."
    },
    {
      name: "Carlos Méndez",
      company: "CEO, LogisticsPro",
      quote: "La solución de IA que implementaron transformó completamente nuestros procesos logísticos. El ROI superó nuestras expectativas en menos de 6 meses."
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar una solución de IA?",
      answer: "El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden completarse en 4-6 semanas, mientras que soluciones más complejas pueden tomar 3-6 meses."
    },
    {
      question: "¿Necesito conocimientos técnicos para implementar IA en mi empresa?",
      answer: "No, nuestro equipo se encarga de todos los aspectos técnicos. Solo necesitamos tu conocimiento del negocio para adaptar la solución a tus necesidades específicas."
    },
    {
      question: "¿Cómo se integran las soluciones con nuestros sistemas existentes?",
      answer: "Desarrollamos conectores personalizados y APIs que permiten una integración fluida con tus sistemas actuales, minimizando la disrupción en tus operaciones."
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <Container>
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Funciona</span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Nuestro proceso está diseñado para garantizar soluciones efectivas y adaptadas a tus necesidades específicas, con un enfoque en resultados medibles.
        </p>
      </Container>
      
      <ProcessTimeline />
      
      <Container className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-8">Testimonios de Clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-5 w-5 text-purple-400 mr-2 mt-1" />
                <p className="text-white/80 italic">{testimonial.quote}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-white mt-16 mb-8">Preguntas Frecuentes</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-purple-800/30 pb-6">
              <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
} 