import Arrow from './icons/Arrow';
import CodePen from './icons/CodePen';
import Cookie from './icons/Cookie';
import Email from './icons/Email';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import LocationPin from './icons/LocationPin';
import Logo from './icons/Logo';
import Phone from './icons/Phone';
import Star from './icons/Star';

export const iconsMap = {
  arrow: Arrow,
  codepen: CodePen,
  cookie: Cookie,
  github: GitHub,
  linkedin: LinkedIn,
  locationPin: LocationPin,
  logo: Logo,
  email: Email,
  phone: Phone,
  star: Star,
} as const;

export type IconName = keyof typeof iconsMap;
