import { NgModule } from '@angular/core';
import { ExerciseTrainZoneComponent } from './train-zone';
import { StatisticItemComponent } from './statistic-item';
import { StatisticsComponent } from './statistics';
import { SourceFilesComponent } from './source-files';
import { ProgressBarComponent } from './progress-bar';
import { ProgressItemComponent } from './progress-item';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExerciseTrainZoneComponent,
    StatisticsComponent,
    StatisticItemComponent,
    SourceFilesComponent,
    ProgressBarComponent,
    ProgressItemComponent
  ],
  exports: [
    ExerciseTrainZoneComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CodemirrorModule,
    RouterModule.forChild([
      { path: ':id/train', component: ExerciseTrainZoneComponent }
    ])
  ]
})
export class TrainingPageModule {
}
