
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  userService = inject(UserService);
  registerForm: FormGroup;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = null;
    this.userService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.success = 'Usuario registrado correctamente.';
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al registrar usuario.';
        this.loading = false;
      }
    });
  }
}
