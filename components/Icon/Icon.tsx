import type { SVGProps } from 'react';

import type { IconName } from '@/components/Icon/iconsMap';
import { iconsMap } from '@/components/Icon/iconsMap';
import { cn } from '@/lib/utils';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 24, className, ...props }: IconProps) {
  const SvgIcon = iconsMap[name];

  return (
    <SvgIcon
      width={size}
      height={size}
      aria-hidden="true"
      className={cn('inline-block', className)}
      {...props}
    />
  );
}
