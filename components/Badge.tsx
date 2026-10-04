import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-md bg-gray-200/50 px-3 py-1 text-xs font-medium text-gray-400',
        className
      )}
    >
      {children}
    </span>
  );
}
