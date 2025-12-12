import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "myapp-LP@/context/ThemeProvider";
import NetworkBackground from "myapp-LP@/components/layout/NetworkBackground";
import Header from "myapp-LP@/components/layout/Header";
import Footer from "myapp-LP@/components/layout/Footer";
import ProgressBar from 'myapp-LP@/components/layout/ProgressBar';
import ChatbotWidget from 'myapp-LP@/components/ChatbotWidget';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paradigmio - Transformamos Negocios con Inteligencia Artificial",
  description: "Soluciones de IA personalizadas para optimizar procesos, aumentar la productividad y potenciar la innovación en tu empresa.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
