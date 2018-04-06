import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesListPageComponent } from './exercises-list-page.component';

describe('ExercisesListPageComponent', () => {
  let component: ExercisesListPageComponent;
  let fixture: ComponentFixture<ExercisesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesListPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load available exercises', () => {
    const element = fixture.debugElement.nativeElement;
    const exercises = element.querySelectorAll('.exercise-item');

    expect(exercises.length).not.toEqual(0);
  });
});
