import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTrainZoneComponent } from './exercise-train-zone.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

describe('ExerciseTrainZoneComponent', () => {
  let component: ExerciseTrainZoneComponent;
  let fixture: ComponentFixture<ExerciseTrainZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseTrainZoneComponent ],
      imports: [CodemirrorModule, FormsModule],
    })
    .compileComponents();
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
