import ExternalLink, { type ExternalLinkProps } from '@/components/ExternalLink';

export default function Footer() {
  return (
    <footer className="py-8">
      <p className="max-w-md text-sm text-gray-500">
        Coded with{' '}
        <span
          aria-hidden="true"
          className="hover:text-accent inline-block cursor-default text-xl text-gray-200 transition-transform duration-300 [-webkit-text-stroke-color:var(--color-gray-500)] [-webkit-text-stroke-width:1.2px] hover:[-webkit-text-stroke-color:var(--color-accent)]"
        >
          ❤
        </span>{' '}
        using <StyledExternalLink href="https://nextjs.org/">Next.js</StyledExternalLink> and{' '}
        <StyledExternalLink href="https://tailwindcss.com/">Tailwind CSS</StyledExternalLink>.
        Deployed with <StyledExternalLink href="https://vercel.com/">Vercel</StyledExternalLink>.
        Icons by <StyledExternalLink href="https://devicon.dev/">Devicon</StyledExternalLink>.
      </p>
    </footer>
  );
}

function StyledExternalLink(props: ExternalLinkProps) {
  return (
    <ExternalLink
      {...props}
      className="border-b border-transparent text-gray-800 transition-colors hover:border-gray-500"
    />
  );
}
