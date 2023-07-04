import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import CssClasses from './Sidebar.module.scss';

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
      className={classNames(
        CssClasses.Sidebar,
        { [CssClasses.collapsed]: collapsed },
        [className],
      )}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={CssClasses.swither}>
        <ThemeSwitcher />
        <LangSwitcher className={CssClasses.lang} />
      </div>
    </div>
  );
};
