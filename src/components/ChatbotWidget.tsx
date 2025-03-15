'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ChatbotWidget() {
  useEffect(() => {
    // Add the Montserrat font if it's not already loaded
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
    document.head.appendChild(link);
    
    // Add the marked library for Markdown parsing
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Load the chatbot CSS */}
      <link rel="stylesheet" href="/static/css/chat_widget.css" />
      
      {/* Load the chatbot JavaScript */}
      <Script 
        src="/static/js/chat_widget.js" 
        strategy="afterInteractive"
      />
    </>
  );
} 