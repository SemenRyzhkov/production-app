import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode; // что телепортируем
  element?: HTMLElement; // куда телепортируем
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
  return createPortal(children, element);
};
