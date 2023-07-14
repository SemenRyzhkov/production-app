import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import CssClasses from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Button data-testid='sidebar-toggle' type='button' onClick={onToggle}>
        toggle
      </Button>
      <div className={CssClasses.swither}>
        <ThemeSwitcher />
        <LangSwitcher className={CssClasses.lang} />
      </div>
    </div>
  );
};
