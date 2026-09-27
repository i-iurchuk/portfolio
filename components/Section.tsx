import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  title?: ReactNode;
  className?: string;
}

export default function Section({ id, className, children, title }: SectionProps) {
  return (
    <section id={id} className={cn('py-6', className)}>
      {title && <h2 className="uppercase">{title}</h2>}
      {children}
    </section>
  );
}
