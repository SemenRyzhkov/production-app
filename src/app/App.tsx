import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Modal } from 'shared/ui/Modal/Modal';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';
import { LOCAL_STORAGE_THEME_KEY } from './providers/ThemeProvider/lib/ThemeContext';

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maiores
          ullam et earum iste, hic non reiciendis distinctio possimus ipsam? Eum
          deserunt distinctio dolorum a!
        </Modal>
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
