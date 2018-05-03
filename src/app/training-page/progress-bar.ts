import { Component } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div class="panel-heading panel-background-color">
      <div class="text-left float-left">
        <progress-item *ngFor="let status of runStatuses" [runStatus]="status"></progress-item>
      </div>
      <div class="text-right">
        <span class="text-btn pr-2" (click)="onSubmitClick()">submit</span>
      </div>
    </div>
  `,
  styles: [
      `
      .text-btn {
        font-size: 12px;
        cursor: pointer;
      }`,
      `
      .text-btn:hover {
        font-size: 14px;
        color: #9a0027;
      }`,
      `
      .panel-background-color {
        background-color: rgb(222, 226, 226);
      }`
  ]
})
export class ProgressBarComponent {
  runStatuses: RunStatus [] = [];

  constructor() {
  }

  onSubmitClick() {
    this.runStatuses.push(RunStatus.RED);
  }
}

export enum RunStatus {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  NOT_RUN = 'not-run'
}
