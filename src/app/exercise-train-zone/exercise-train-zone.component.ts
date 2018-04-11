import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-train-zone',
  templateUrl: './exercise-train-zone.component.html',
  styleUrls: ['./exercise-train-zone.component.css']
})
export class ExerciseTrainZoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitKataClick() {
    console.log('submitted');
  }
}
