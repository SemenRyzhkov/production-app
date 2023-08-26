import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
// import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      {t('Главная страница')}
      <Input value={value} onChange={onChange} placeholder={'Введите текст'} />
    </div>
  );
};

export default MainPage;
