import Technologies from "myapp-LP@/components/sections/Technologies";
import Container from "myapp-LP@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Card, { CardTitle, CardDescription } from "myapp-LP@/components/ui/Card";

export const metadata = {
  title: "Tecnologías de IA | Engine AI",
  description: "Conoce las tecnologías de inteligencia artificial que utilizamos para desarrollar soluciones innovadoras para tu negocio.",
};

export default function TecnologiasPage() {
  const techCases = [
    {
      title: "Análisis Predictivo con TensorFlow",
      description: "Implementamos modelos de análisis predictivo para una empresa de retail, permitiéndoles anticipar tendencias de ventas con un 85% de precisión."
    },
    {
      title: "Chatbot con OpenAI",
      description: "Desarrollamos un asistente virtual avanzado para atención al cliente que resuelve el 70% de las consultas sin intervención humana."
    },
    {
      title: "Automatización con Python",
      description: "Creamos flujos de trabajo automatizados que redujeron el tiempo de procesamiento de documentos en un 90% para una firma legal."
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
          Tecnologías que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Dominamos</span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Utilizamos las herramientas y plataformas más avanzadas para desarrollar soluciones de IA de alto rendimiento adaptadas a tus necesidades.
        </p>
      </Container>
      
      <Technologies />
      
      <Container className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-8">Casos de Implementación</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCases.map((techCase, index) => (
            <Card key={index} borderTop className="h-full">
              <CardTitle>{techCase.title}</CardTitle>
              <CardDescription>{techCase.description}</CardDescription>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Nuestras Capacidades Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Inteligencia Artificial</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Aprendizaje automático (Machine Learning)</li>
                <li>• Procesamiento de lenguaje natural (NLP)</li>
                <li>• Visión por computadora</li>
                <li>• Sistemas de recomendación</li>
                <li>• Análisis predictivo</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Desarrollo e Integración</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Desarrollo de APIs y microservicios</li>
                <li>• Integración con sistemas existentes</li>
                <li>• Arquitecturas en la nube</li>
                <li>• Desarrollo de aplicaciones web y móviles</li>
                <li>• Automatización de procesos</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 