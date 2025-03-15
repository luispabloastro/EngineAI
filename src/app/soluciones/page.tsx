import Solutions from "myapp-LP@/components/sections/Solutions";
import Container from "myapp-LP@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Soluciones de IA para Negocios | Engine AI",
  description: "Descubre nuestras soluciones de inteligencia artificial para transformar tu negocio: agentes de IA, automatizaciones y software personalizado.",
};

export default function SolucionesPage() {
  return (
    <div className="pt-20 pb-20">
      <Container>
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Soluciones</span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Implementamos tecnologías de IA avanzadas adaptadas a las necesidades específicas de tu empresa para optimizar procesos y potenciar la innovación.
        </p>
      </Container>
      
      <Solutions />
      
      <Container className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Casos de Éxito</h2>
            <div className="bg-white/5 p-6 rounded-lg border-t-2 border-purple-600">
              <h3 className="text-xl font-bold text-white mb-2">Empresa de Logística</h3>
              <p className="text-white/70 mb-4">
                Implementamos un sistema de IA que optimizó las rutas de entrega, reduciendo los costos operativos en un 30% y mejorando los tiempos de entrega en un 25%.
              </p>
              <div className="text-purple-400">Resultado: 30% reducción de costos</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Beneficios</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Reducción de costos operativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Automatización de tareas repetitivas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Mejora en la toma de decisiones</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Optimización de procesos internos</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Incremento en la satisfacción del cliente</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
} 