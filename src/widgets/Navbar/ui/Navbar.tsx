import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import CssClasses from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(CssClasses.Navbar, {}, [className])}>
      <div className={CssClasses.links}>
        <AppLink
          theme={AppLinkTheme.RED}
          to='/'
          className={CssClasses.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
