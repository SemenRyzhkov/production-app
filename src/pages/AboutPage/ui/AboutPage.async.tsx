import { lazy } from 'react';

export const AboutPageSync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 2000);
  }),
);
