import { ExercisesService } from './exercises.service';

declare var require: any;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
const md = require('markdown-it')();

@Component({
  selector: 'app-exercises-list-page',
  templateUrl: './exercises-list-page.component.html',
  styleUrls: ['./exercises-list-page.component.css'],
  providers: [ExercisesService]
})
export class ExercisesListPageComponent implements OnInit {
  exercises: {id: string, title: string, content: string}[];
  selectedExerciseId: string;
  exerciseText: string;

  constructor(private exercisesService: ExercisesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.exercisesService.fetchExercises()
      .subscribe(exercises => {
        const withTitle: {id: string, title: string, content: string}[] = [];
        exercises.forEach((value) => {
          withTitle.push({...value, title: this.getTitleFrom(value.content)});
        });
        this.exercises = withTitle;
        this.onExerciseSelected(exercises[0]);
    });
  }

  private getTitleFrom(content) {
    return content.split('\n')[0].replace('###', '');
  }

  onExerciseSelected(exercise) {
    this.selectedExerciseId = exercise.id;
    this.exerciseText = md.render(exercise.content);
  }

  onTrainKataClick() {
    console.log(this.selectedExerciseId);
    this.router.navigate(['./', this.selectedExerciseId, 'train'], {relativeTo: this.route});
  }
}
