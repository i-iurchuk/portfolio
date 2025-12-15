import { iconsMap } from '@components/Icon/iconsMap';

import type { IconName } from '@components/Icon/iconsMap';
import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  const SvgIcon = iconsMap[name];

  return <SvgIcon width={size} height={size} aria-hidden className="inline-block" {...props} />;
};

export default Icon;
