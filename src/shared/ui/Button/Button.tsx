import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import CssClasses from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children, className, theme, ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(CssClasses.Button, {}, [
        className,
        CssClasses[theme],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
