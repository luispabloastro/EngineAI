'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ChatbotWidget() {
  useEffect(() => {
    // Add the Montserrat font if it's not already loaded
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
    document.head.appendChild(fontLink);

    // Add the chatbot CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/static/css/chat_widget.css';
    document.head.appendChild(cssLink);

    // Add the marked library for Markdown parsing
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (fontLink.parentNode) document.head.removeChild(fontLink);
      if (cssLink.parentNode) document.head.removeChild(cssLink);
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Load the chatbot JavaScript */}
      <Script
        src="/static/js/chat_widget.js"
        strategy="afterInteractive"
      />
    </>
  );
} 