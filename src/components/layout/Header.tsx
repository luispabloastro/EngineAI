'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Container from './Container';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const isAgendaPage = pathname === '/agenda';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-800/30">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/engineailogo.png" 
              alt="Engine AI Logo" 
              width={80} 
              height={80} 
              className="object-contain"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-300">
              Engine AI
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {!isAgendaPage && (
              <Link 
                href="/agenda" 
                className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-2 rounded-md font-medium hover:from-purple-600 hover:to-purple-400 transition-colors"
              >
                Comienza ahora
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
} 