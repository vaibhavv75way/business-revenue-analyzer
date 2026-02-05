import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialModel } from '../../models/financial.model';
import { FormattedCurrencyPipe } from '../../pipes/formatted-currency-pipe';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, FormattedCurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
entries = signal<FinancialModel[]>([
    {
      id: '1',
      startDate: '2026-01-01',
      endDate: '2026-01-07',
      revenue: 125000,
      expense: 75000,
    },
    {
      id: '2',
      startDate: '2026-01-08',
      endDate: '2026-01-14',
      revenue: 98000,
      expense: 62000,
    },
    {
      id: '3',
      startDate: '2026-01-15',
      endDate: '2026-01-21',
      revenue: 142000,
      expense: 88000,
    },
  ]);

  filterStartDate = signal('2026-01-01');
  filterEndDate = signal('2026-02-05');

  formData = signal({
    startDate: '',
    endDate: '',
    revenue: '',
    expense: '',
  });

  filteredEntries = computed(() => {
    const start = new Date(this.filterStartDate());
    const end = new Date(this.filterEndDate());

    return this.entries().filter(e => {
      return new Date(e.startDate) <= end && new Date(e.endDate) >= start;
    });
  });

  totalRevenue = computed(() =>
    this.filteredEntries().reduce((s, e) => s + e.revenue, 0)
  );

  totalExpense = computed(() =>
    this.filteredEntries().reduce((s, e) => s + e.expense, 0)
  );

  totalProfit = computed(() =>
    this.totalRevenue() - this.totalExpense()
  );

  addEntry() {
    const data = this.formData();

    if (!data.startDate || !data.endDate) return;

    this.entries.update(e => [
      ...e,
      {
        id: Date.now().toString(),
        startDate: data.startDate,
        endDate: data.endDate,
        revenue: +data.revenue,
        expense: +data.expense,
      },
    ]);

    this.formData.set({
      startDate: '',
      endDate: '',
      revenue: '',
      expense: '',
    });
  }
}
