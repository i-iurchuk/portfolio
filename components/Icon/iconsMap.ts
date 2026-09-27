import Arrow from '@/components/Icon/icons/Arrow';
import CheckMark from '@/components/Icon/icons/CheckMark';
import Chevron from '@/components/Icon/icons/Chevron';
import Copy from '@/components/Icon/icons/Copy';
import GitHub from '@/components/Icon/icons/GitHub';
import CodePen from '@/components/Icon/icons/CodePen';
import LinkedIn from '@/components/Icon/icons/LinkedIn';
import Email from '@/components/Icon/icons/Email';

export const iconsMap = {
  arrow: Arrow,
  github: GitHub,
  checkmark: CheckMark,
  chevron: Chevron,
  copy: Copy,
  codepen: CodePen,
  linkedin: LinkedIn,
  email: Email,
};

export type IconName = keyof typeof iconsMap;
