

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router = inject(Router);
  goToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/register']);
  }
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        // Aquí puedes manejar la respuesta, por ejemplo redirigir o mostrar datos
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Credenciales inválidas o error de red.';
        this.loading = false;
      }
    });
  }
}
