import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import CssClasses from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    // в хук setState можно передавать колбэк, который принимает предыдущее значение
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid='sidebar'
      className={classNames(
        CssClasses.Sidebar,
        { [CssClasses.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
        className='collapseBtn'
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={CssClasses.swither}>
        <ThemeSwitcher />
        <LangSwitcher className={CssClasses.lang} />
      </div>
    </div>
  );
};
