import type { AnchorHTMLAttributes } from 'react';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
