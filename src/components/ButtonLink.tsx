import { Link } from 'react-router';

import type { LinkProps } from 'react-router';

type ButtonLinkProps = LinkProps;

function ButtonLink({ to, children, ...rest }: ButtonLinkProps) {
  return (
    <Link to={to} className="inline-block cursor-pointer border-2 font-semibold uppercase" {...rest}>
      <span className="inline-block px-8 py-2 transition-all hover:translate-[5px] hover:bg-(--color-base-yellow)">
        {children}
      </span>
    </Link>
  );
}

export default ButtonLink;
