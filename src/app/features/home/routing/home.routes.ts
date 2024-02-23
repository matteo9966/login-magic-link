import { Routes } from '@angular/router';
import { config } from '../../../core/config/app-config';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/landing-page/landing-page.component').then(
        (c) => c.LandingPageComponent,
      ),
    children: [
      {
        path: config.routes.landing.home.path,
        loadComponent: () =>
          import('../pages/home-page/home-page.component').then(
            (c) => c.HomePageComponent,
          ),
      },
    ],
  },
];
