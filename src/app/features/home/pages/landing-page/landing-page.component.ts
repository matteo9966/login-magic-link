import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingNavbarComponent } from '../../components/landing-navbar/landing-navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, LandingNavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
