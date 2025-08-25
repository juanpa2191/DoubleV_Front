import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DebtService } from '../../../core/services/debt.service';
import { DebtsRequestModel } from '../../../core/models/debts.request.model';

@Component({
  selector: 'app-create-debt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-debt.component.html',
  styleUrls: ['./create-debt.component.css']
})
export class CreateDebtComponent {
  fb = inject(FormBuilder);
  debtService = inject(DebtService);
  debtForm: FormGroup;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor() {
    this.debtForm = this.fb.group({
      description: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      creditorId: ['', Validators.required],
      debtorId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.debtForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = null;
    const payload: DebtsRequestModel = this.debtForm.value;
    this.debtService.createDebt(payload).subscribe({
      next: () => {
        this.success = 'Deuda creada correctamente.';
        this.loading = false;
        this.debtForm.reset();
      },
      error: () => {
        this.error = 'Error al crear la deuda.';
        this.loading = false;
      }
    });
  }
}
