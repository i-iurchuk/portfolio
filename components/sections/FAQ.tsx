'use client';

import { useState } from 'react';

import Section from '@/components/Section';
import { faqList } from '@/data/faq';
import { cn } from '@/lib/utils';
import { FaqItem as FaqItemType } from '@/types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" title="F.A.Q.">
      <div className="group">
        {faqList.map((faq, index) => {
          return (
            <FaqItem
              key={faq.question}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((currentIndex) => (currentIndex === index ? null : index))
              }
              {...faq}
            />
          );
        })}
      </div>
    </Section>
  );
}

interface FAQItemProps extends FaqItemType {
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-6 py-3 text-left transition-colors duration-300',
          'hover:opacity-100',
          !isOpen && 'group-hover:opacity-50',
          isOpen && 'text-accent'
        )}
      >
        <span className="text-lg font-medium">{question}</span>

        <span
          aria-hidden="true"
          className={cn(
            'text-2xl transition-transform duration-300 ease-in-out',
            isOpen && 'rotate-45'
          )}
        >
          +
        </span>
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="pr-12 pb-6 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
