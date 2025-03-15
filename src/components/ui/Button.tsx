'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from 'myapp-LP@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:from-purple-600 hover:to-purple-400',
    secondary: 'bg-purple-800/20 text-purple-300 hover:bg-purple-800/30',
    outline: 'border border-purple-500 text-purple-300 hover:bg-purple-900/20'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 