import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "myapp-LP@/context/ThemeProvider";
import NetworkBackground from "myapp-LP@/components/layout/NetworkBackground";
import Header from "myapp-LP@/components/layout/Header";
import Footer from "myapp-LP@/components/layout/Footer";
import ProgressBar from 'myapp-LP@/components/layout/ProgressBar';
import ChatbotWidget from 'myapp-LP@/components/ChatbotWidget';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engine AI - Transformamos Negocios con Inteligencia Artificial",
  description: "Soluciones de IA personalizadas para optimizar procesos, aumentar la productividad y potenciar la innovación en tu empresa.",
  icons: {
    icon: '/engineailogo.png',
    apple: '/engineailogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/engineailogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <ThemeProvider>
          <ProgressBar />
          <NetworkBackground />
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <ChatbotWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
