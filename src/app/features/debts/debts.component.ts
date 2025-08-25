
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtService } from '../../core/services/debt.service';
import { DebtsResponseModel } from '../../core/models/debts.response.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-debts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent {
  debtService = inject(DebtService);
  debts: DebtsResponseModel[] = [];
  loading = false;
  error: string | null = null;

  // Filtros
  filterDescription: string = '';
  filterStatus: string = '';

  // Paginación
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;

  get filteredDebts(): DebtsResponseModel[] {
    return this.debts.filter(debt => {
      const matchesDescription = debt.description.toLowerCase().includes(this.filterDescription.toLowerCase());
      const matchesStatus = this.filterStatus ? debt.status === this.filterStatus : true;
      return matchesDescription && matchesStatus;
    });
  }

  get pagedDebts(): DebtsResponseModel[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredDebts.slice(start, start + this.pageSize);
  }

  ngOnInit() {
    this.loading = true;
    this.debtService.getDebts().subscribe({
      next: (res) => {
        this.debts = res;
        this.loading = false;
        this.updateTotalPages();
      },
      error: (err) => {
        this.error = 'Error al cargar las deudas.';
        this.loading = false;
      }
    });
  }

  updateTotalPages() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredDebts.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Actualizar paginación al cambiar filtros
  ngOnChanges() {
    this.updateTotalPages();
  }
}
