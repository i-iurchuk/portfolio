import type { AnchorHTMLAttributes } from 'react';

export default function ExternalLink({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
