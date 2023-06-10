import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(CssClasses.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={CssClasses.links}>
        <AppLink
          theme={AppLinkTheme.RED}
          to={'/'}
          className={CssClasses.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
