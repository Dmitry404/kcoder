import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-train-zone',
  templateUrl: './exercise-train-zone.component.html',
  styleUrls: ['./exercise-train-zone.component.css']
})
export class ExerciseTrainZoneComponent implements OnInit {
  code: string;
  options = {
    lineNumbers: true,
    tabSize: 2,
    mode: 'javascript',
  };

  runStatuses: RunStatus [] = [RunStatus.NOT_RUN];

  constructor() { }

  ngOnInit() {
  }

  onSubmitKataClick() {
    this.runStatuses.push(this.randomStatus());
  }

  private randomStatus(): RunStatus {
    return Math.floor(Math.random() * Object.keys(RunStatus).length / 2);
  }

  getClassName(runStatus: RunStatus): string {
    switch(runStatus) {
      case RunStatus.RED: return 'red';
      case RunStatus.YELLOW: return 'yellow';
      case RunStatus.GREEN: return 'green';
      case RunStatus.NOT_RUN: return 'not-run';
    }
  }
}

enum RunStatus {
  RED,
  YELLOW,
  GREEN,
  NOT_RUN
}
