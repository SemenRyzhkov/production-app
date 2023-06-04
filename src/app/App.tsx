import './styles/index.scss';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>CHANGE</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
