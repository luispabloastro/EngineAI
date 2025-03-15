import Booking from "myapp-LP@/components/sections/Booking";
import Container from "myapp-LP@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Agenda una ConsultorIA | Engine AI",
  description: "Reserva una sesión gratuita con nuestros expertos para analizar cómo la IA puede transformar tu negocio.",
};

export default function AgendaPage() {
  return (
    <div className="pt-20 pb-20">
      <Container>
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Agenda tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">ConsultorIA</span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl">
          Reserva una sesión gratuita con nuestros expertos para analizar cómo la inteligencia artificial puede transformar tu negocio y potenciar tu crecimiento.
        </p>
      </Container>
      
      <Booking />
    </div>
  );
} 