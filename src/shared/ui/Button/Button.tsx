import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import CssClasses from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, square, size, ...otherProps } = props;

  const additionalClasses = [className, CssClasses[theme], CssClasses[size]];
  return (
    <button
      type='button'
      className={classNames(
        CssClasses.Button,
        { [CssClasses.square]: square },
        additionalClasses
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
