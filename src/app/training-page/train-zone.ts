import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-train-zone',
  templateUrl: './train-zone.html',
  styleUrls: ['./train-zone.css']
})
export class ExerciseTrainZoneComponent implements OnInit {
  code: string;
  options = {
    lineNumbers: true,
    tabSize: 2,
    mode: 'javascript',
  };

  runStatuses: RunStatus [] = [RunStatus.NOT_RUN];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitKataClick() {
    this.runStatuses.push(this.randomStatus());
  }

  private randomStatus(): RunStatus {
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
}

enum RunStatus {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  NOT_RUN = 'not-run'
}

const statuses = [RunStatus.RED, RunStatus.YELLOW, RunStatus.GREEN];
