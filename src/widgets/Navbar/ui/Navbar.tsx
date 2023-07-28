import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(CssClasses.Navbar, {}, [className])}>
      <div className={CssClasses.links}>/</div>
    </div>
  );
};
