import { Routes } from '@angular/router';
import { config } from './core/config/app-config';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: config.routes.landing.base,
    loadChildren: () =>
      import('./features/home/routing/home.routes').then((r) => r.routes),
  },
  {
    path: config.routes.authentication.base,
    loadChildren: () =>
      import('./features/authentication/routing/authentication.routes').then(
        (r) => r.routes,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
];
