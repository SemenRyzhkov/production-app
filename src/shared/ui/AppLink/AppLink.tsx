import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(CssClasses.AppLink, {}, [
        className,
        CssClasses[theme],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
