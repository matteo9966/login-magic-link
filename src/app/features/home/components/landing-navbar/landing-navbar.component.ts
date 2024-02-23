import { Component } from '@angular/core';
import { config } from '../../../../core/config/app-config';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-landing-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.scss',
})
export class LandingNavbarComponent {
  routes = [
    { link: config.routes.authentication.login.absolute, label: 'Login' },
    { link: config.routes.authentication.signup.absolute, label: 'Signup' },
  ];
}
