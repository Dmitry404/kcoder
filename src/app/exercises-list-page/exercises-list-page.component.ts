import { Component, OnInit } from '@angular/core';
const md = require('markdown-it')();

@Component({
  selector: 'app-exercises-list-page',
  templateUrl: './exercises-list-page.component.html',
  styleUrls: ['./exercises-list-page.component.css']
})
export class ExercisesListPageComponent implements OnInit {
  exercises = {
    'ttt': '*asterisks* or _underscores_',
    'fff': '**asterisks** or __underscores__',
    'lll': '**asterisks and _underscores_**',
    'nnn': '~~Scratch this~~'
  };
  names: string[];
  selectedExercise = 'ttt';
  exerciseText: string;

  constructor() {
  }

  ngOnInit() {
    this.names = Object.keys(this.exercises);
  }

  onExerciseSelected(exercise) {
    this.selectedExercise = exercise;
    this.exerciseText = md.render(this.exercises[exercise]);
  }

}
