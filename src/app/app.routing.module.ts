import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExercisesListPageComponent } from './exercises-list-page/exercises-list-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseTrainZoneComponent } from './exercise-train-zone/exercise-train-zone.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercises', children: [
      { path: '', component: ExercisesListPageComponent },
      { path: ':id/train', component: ExerciseTrainZoneComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
