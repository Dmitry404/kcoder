import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTrainZoneComponent } from './train-zone';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { SourceFilesComponent } from './source-files';
import { StatisticsComponent } from './statistics';
import { StatisticItemComponent } from './statistic-item';
import { ProgressBarComponent } from './progress-bar';
import { ProgressItemComponent } from './progress-item';

describe('ExerciseTrainZoneComponent', () => {
  let component: ExerciseTrainZoneComponent;
  let fixture: ComponentFixture<ExerciseTrainZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTrainZoneComponent, SourceFilesComponent, StatisticsComponent, StatisticItemComponent, ProgressBarComponent, ProgressItemComponent],
      imports: [CodemirrorModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTrainZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
