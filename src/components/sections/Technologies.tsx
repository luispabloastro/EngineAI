'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

export default function Technologies() {
  const technologies = [
    { name: 'Python', logo: '/pylogo.png' },
    { name: 'TensorFlow', logo: '/tensorflowlogo.png' },
    { name: 'PyTorch', logo: '/pytorchlogo.png' },
    { name: 'OpenAI', logo: '/openailogo.png' },
    { name: 'React', logo: '/reactlogo.png' },
    { name: 'Node.js', logo: '/nodejslogo.png' },
    { name: 'AWS', logo: '/awslogo.png' },
    { name: 'Google Cloud', logo: '/googlecloudlogo.png' },
    { name: 'Azure', logo: '/azurelogo.png' },
    { name: 'Docker', logo: '/dockerlogo.png' },
    { name: 'Kubernetes', logo: '/kuberneteslogo.png' },
    { name: 'MongoDB', logo: '/mongodblogo.png' },
  ];

  // For the continuous marquee effect
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeWidth = marquee.scrollWidth / 2; // Half because we have duplicated items
    let position = 0;
    const speed = 0.5; // Adjust speed as needed
    
    const animate = () => {
      position -= speed;
      
      // Reset position when all items have moved off screen
      if (Math.abs(position) >= marqueeWidth) {
        position = 0;
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 border-t border-purple-800/30" id="technologies">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tecnologías que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Dominamos</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Utilizamos las herramientas y plataformas más avanzadas para desarrollar soluciones de IA de alto rendimiento.
          </p>
        </div>
      </Container>
      
      {/* Marquee container */}
      <div className="relative w-full overflow-hidden py-12 bg-black/30">
        <div className="flex whitespace-nowrap">
          {/* Duplicate the items to create a seamless loop */}
          <div 
            ref={marqueeRef}
            className="flex items-center space-x-16 px-8 inline-flex"
          >
            {/* First set of items */}
            {technologies.map((tech, index) => (
              <div key={`tech1-${index}`} className="marquee-item flex-shrink-0">
                <div className="relative w-24 h-24 bg-white/5 rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {technologies.map((tech, index) => (
              <div key={`tech2-${index}`} className="marquee-item flex-shrink-0">
                <div className="relative w-24 h-24 bg-white/5 rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 