'use client';

import { Calendar } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function Booking() {
  useEffect(() => {
    // Initialize Cal when component mounts
    (async function () {
      const cal = await getCalApi();
      // Configure the calendar UI
      cal("ui", {
        styles: { branding: { brandColor: "#8A2BE2" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-20 border-t border-purple-800/30" id="booking">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Agenda tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">ConsultorIA</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Reserva una sesión gratuita con nuestros expertos para analizar cómo la IA puede transformar tu negocio.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="up">
          <motion.div
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <Card className="max-w-4xl mx-auto p-6 md:p-8">
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Calendar className="h-6 w-6 text-purple-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Selecciona una fecha y hora</h3>
              </motion.div>
              
              {/* Cal.com React Component */}
              <motion.div 
                className="rounded-md overflow-hidden" 
                style={{ minHeight: '600px', width: '100%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Cal
                  calLink="digitalai"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                  config={{ 
                    layout: "month_view",
                    theme: "dark",
                    branding: { brandColor: "#8A2BE2" }
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="text-white/70 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                * Recibirás una confirmación por correo electrónico con los detalles de la reunión.
              </motion.p>
            </Card>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
} 