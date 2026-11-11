'use client';

import { cn } from '@/lib/utils';
import useActiveSection from '@/hooks/useActiveSection';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'faq', label: 'F.A.Q.' },
];

export default function NavMenu() {
  const activeSection = useActiveSection(sections.map((section) => section.id));

  return (
    <nav aria-label="Main navigation" className="fixed bottom-2 pb-16">
      <ul>
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <li key={id} className={cn('hover:font-bold', isActive && 'font-bold')}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                className="group flex items-center"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mr-4 block h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-16',
                    isActive && 'w-16'
                  )}
                ></span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
