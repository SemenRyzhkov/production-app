import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

import CssClasses from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [CssClasses.opened]: isOpen,
    [CssClasses.isClosing]: isClosing,
    [CssClasses[theme]]: true,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // на каждый перерендер компонента эта функция создается заново - без useCallback
  // она запоминает, мемоизирует и возвращает ссылку на одну и ту же функцию
  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isOpen, onKeydown]);

  const onContentclick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(CssClasses.Modal, mods, [className])}>
        <div className={CssClasses.overlay} onClick={closeHandler}>
          <div className={CssClasses.content} onClick={onContentclick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
