'use client';

import { ReactNode } from 'react';
import { cn } from 'myapp-LP@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  borderTop?: boolean;
}

export default function Card({ children, className, borderTop = false }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white/5 backdrop-blur-sm rounded-lg p-6',
        borderTop && 'border-t-2 border-purple-600',
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-bold text-white mb-2', className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-white/70', className)}>
      {children}
    </p>
  );
} 