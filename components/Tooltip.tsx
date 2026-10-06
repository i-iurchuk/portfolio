import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-gray-800 px-2.5 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        {content}
        <span
          aria-hidden="true"
          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"
        />
      </span>
    </div>
  );
}
