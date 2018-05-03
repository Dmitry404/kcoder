import { Component, Input } from '@angular/core';

@Component({
  selector: 'statistic-item',
  template: `
    <li class="nav-item">
      <span class="nav-link statistic-item">{{ item.text }}: {{ item.count }}</span>
    </li>
  `,
  styles: [
    `.statistic-item {
      font-size: 12px;
      color: #274658;
      cursor: pointer;
    }

    .statistic-item:hover {
      color: #565f8b;
    }

    .statistic-item.active {
      color: #565f8b;
      background-color: #e9f0f0;
    }`
  ]
})
export class StatisticItemComponent {
  @Input() item: StatisticItem;
}

export class StatisticItem {
  constructor(readonly text: string, readonly count: number) {
  }
}
