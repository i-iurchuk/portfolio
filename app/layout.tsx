import type { Metadata } from 'next';

import { DM_Mono, Outfit } from 'next/font/google';
import './globals.css';

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Iryna Iurchuk — Frontend Developer',
  description:
    'Personal portfolio of Iryna Iurchuk, a frontend developer building modern web experiences.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dmMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
