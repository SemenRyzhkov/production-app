import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;
  const mods: Record<string, boolean> = {
    [CssClasses.opened]: isOpen,
  };
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onContentclick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classNames(CssClasses.Modal, mods, [className])}>
      <div className={CssClasses.overlay} onClick={closeHandler}>
        <div className={CssClasses.content} onClick={onContentclick}>
          {children}
        </div>
      </div>
    </div>
  );
};
