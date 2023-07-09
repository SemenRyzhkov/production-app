import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import CssClasses from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(CssClasses.PageError, {}, [className])}>
      <button type='button' onClick={reloadPage}>
        {t('Перезагрузить')}
      </button>
      <p>{t('Непредвиденная ошибка')}</p>
    </div>
  );
};
