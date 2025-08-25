import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="input-group">
      <label *ngIf="label">{{ label }}</label>
      <input [type]="type" [formControl]="control" [placeholder]="placeholder" />
    </div>
  `,
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;
}
