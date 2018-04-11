import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExercisesListPageComponent } from './exercises-list-page/exercises-list-page.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseTrainZoneComponent } from './exercise-train-zone/exercise-train-zone.component';
import { TrainExerciseGuard } from './exercise-train-zone/train.exercise.activate.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderNavbarComponent,
    ExercisesListPageComponent,
    PageNotFoundComponent,
    ExerciseTrainZoneComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CodemirrorModule,
  ],
  providers: [TrainExerciseGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
