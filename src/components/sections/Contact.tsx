'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    sitio: '',
    mensaje: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      nombre: '',
      apellido: '',
      correo: '',
      sitio: '',
      mensaje: ''
    });
    // Show success message
    alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
  };

  return (
    <section className="py-20 border-t border-purple-800/30" id="contact">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Aún tienes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">preguntas</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Contáctanos y un experto en IA te ayudará a resolver todas tus dudas.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="up">
          <motion.div
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            <Card className="max-w-3xl mx-auto p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="nombre" className="block text-white mb-2">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-purple-800/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="apellido" className="block text-white mb-2">Apellido</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-purple-800/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="correo" className="block text-white mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-purple-800/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="sitio" className="block text-white mb-2">Sitio Web (opcional)</label>
                    <input
                      type="url"
                      id="sitio"
                      name="sitio"
                      value={formData.sitio}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-purple-800/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500"
                    />
                  </motion.div>
                </div>
                
                <motion.div className="mb-6" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="mensaje" className="block text-white mb-2">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-purple-800/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-500"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
} 