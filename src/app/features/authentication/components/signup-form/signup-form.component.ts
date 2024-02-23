import { Component } from '@angular/core';
import { FormComponent } from '../../../../shared/components/form/form.component';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {}
