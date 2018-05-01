import { Component } from '@angular/core';
import { StatisticItem } from './statistic-item';

@Component({
  selector: 'statistics',
  template: `
    <h6 class="sidebar-heading justify-content-between align-items-center px-3 mt-1 mb-1 text-muted font-weight-light">
      <span>Statistics</span>
    </h6>
    <ul class="nav flex-column">
      <statistic-item *ngFor="let i of items" [item]="i"></statistic-item>
    </ul>
  `
})
export class StatisticsComponent {
  items: StatisticItem[];

  constructor() {
    this.items = [];
    const names = ['Failed runs', 'Syntax errors', 'Successful runs', 'Total runs'];
    for (const name of names) {
      this.items.push(new StatisticItem(name, 0));
    }
  }
}
