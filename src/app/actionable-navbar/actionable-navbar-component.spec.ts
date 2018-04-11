import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableNavbarComponent } from './actionable-navbar.component';

describe('ActionableNavbarComponent', () => {
  let component: ActionableNavbarComponent;
  let fixture: ComponentFixture<ActionableNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionableNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionableNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
