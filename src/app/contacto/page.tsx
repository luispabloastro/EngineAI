import Contact from "myapp-LP@/components/sections/Contact";
import Container from "myapp-LP@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contacto | Engine AI",
  description: "Contáctanos para resolver tus dudas sobre nuestras soluciones de inteligencia artificial para empresas.",
};

export default function ContactoPage() {
  return (
    <div className="pt-20 pb-20">
      <Container>
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Contacto</span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Estamos aquí para ayudarte. Contáctanos y un experto en IA te responderá a la brevedad para resolver todas tus dudas.
        </p>
      </Container>
      
      <Contact />
    </div>
  );
} 