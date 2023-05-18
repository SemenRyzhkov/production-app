import { Suspense, useState, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';

import { MainPageSync } from './pages/MainPage/MainPage.async';
import { AboutPageSync } from './pages/AboutPage/AboutPage.async';

import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>CHANGE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageSync />} />
          <Route path={'/'} element={<MainPageSync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
