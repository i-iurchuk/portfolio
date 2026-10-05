import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded border border-gray-100 p-4 shadow-md transition-shadow duration-300',
        'after:absolute after:top-0 after:left-0 after:-z-10 after:h-1.5 after:w-full after:origin-left',
        'after:bg-accent after:scale-x-0 after:transition-transform after:duration-500',
        'hover:shadow-xl hover:after:scale-x-100',
        'motion-reduce:transition-none motion-reduce:after:transition-none',
        className
      )}
    >
      {children}
    </div>
  );
}
