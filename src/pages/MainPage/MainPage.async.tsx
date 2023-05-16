import { lazy } from 'react';

export const MainPageSync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 2000);
    })
);
