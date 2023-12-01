import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';
// import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();

  return <Page>{t('Главная страница')}</Page>;
};

export default MainPage;
