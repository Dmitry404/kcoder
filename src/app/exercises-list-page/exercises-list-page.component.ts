import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-list-page',
  templateUrl: './exercises-list-page.component.html',
  styleUrls: ['./exercises-list-page.component.css']
})
export class ExercisesListPageComponent implements OnInit {
  exercises = [
    'ttt', 'fff'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
