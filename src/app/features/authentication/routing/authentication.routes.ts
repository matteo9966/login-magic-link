import { Routes } from '@angular/router';
import { config } from '../../../core/config/app-config';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/authentication-page/authentication-page.component').then(
        (c) => c.AuthenticationPageComponent,
      ),
  },
  {
    path: config.routes.authentication.login.path,
    loadComponent: () =>
      import('../pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent,
      ),
  },
  {
    path: config.routes.authentication.signup.path,
    loadComponent: () =>
      import('../pages/signup-page/signup-page.component').then(
        (c) => c.SignupPageComponent,
      ),
  },
];
