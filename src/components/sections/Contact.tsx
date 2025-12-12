'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
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
    alert(t('form.success'));
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <AnimatedSection>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{t('titleAccent')}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative z-10 shadow-2xl">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="nombre" className="block text-slate-300 mb-2 text-sm font-medium">{t('form.firstName')}</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a]/50 border border-purple-800/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-500/50 placeholder-slate-600"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="apellido" className="block text-slate-300 mb-2 text-sm font-medium">{t('form.lastName')}</label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a]/50 border border-purple-800/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-500/50 placeholder-slate-600"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="correo" className="block text-slate-300 mb-2 text-sm font-medium">{t('form.email')}</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a]/50 border border-purple-800/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-500/50 placeholder-slate-600"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="sitio" className="block text-slate-300 mb-2 text-sm font-medium">{t('form.website')}</label>
                    <input
                      type="url"
                      id="sitio"
                      name="sitio"
                      value={formData.sitio}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a]/50 border border-purple-800/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-500/50 placeholder-slate-600"
                    />
                  </motion.div>
                </div>

                <motion.div className="mb-8" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="mensaje" className="block text-slate-300 mb-2 text-sm font-medium">{t('form.message')}</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#0a0a0a]/50 border border-purple-800/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-500/50 placeholder-slate-600 resize-none"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-12 py-4 text-base shadow-lg shadow-purple-900/20">
                    <Send className="h-5 w-5 mr-3" />
                    {t('form.submit')}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
} 