import { Component, Input } from '@angular/core';
import { RunStatus } from './progress-bar';

@Component({
  selector: 'progress-item',
  template: `
    <div class="badge-status" [ngClass]="runStatus"></div>
  `,
  styles: [
      `
      .badge-status {
        width: 14px;
        height: 7px;
        display: inline-block;
      }`,
      `
      .badge-status.green {
        background-color: #28a745;
      }`,
      `
      .badge-status.yellow {
        background-color: #ffc107;
      }`,
      `
      .badge-status.red {
        background-color: #dc3545;
      }`
  ]
})
export class ProgressItemComponent {
  @Input() runStatus: RunStatus;
}
