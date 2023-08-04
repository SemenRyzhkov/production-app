import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';

import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(CssClasses.Navbar, {}, [className])}>
      <Button
        onClick={() => setIsAuthModal(true)}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={CssClasses.links}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            + 'Ab maiores ullam et earum iste, hic non reiciendis distinctio possimus ipsam? Eum deserunt'
            + 'distinctio dolorum a!'
        )}
      </Modal>
    </div>
  );
};
