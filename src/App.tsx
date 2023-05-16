import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.scss';

import { MainPageSync } from './pages/MainPage/MainPage.async';
import { AboutPageSync } from './pages/AboutPage/AboutPage.async';

const App = () => {
  return (
    <div className='app'>
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
