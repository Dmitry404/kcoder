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

  // should contain:
  // - header:
  //   - text(can be empty) or icons bar(optional)
  // - group:
  //    - group header + action bar(optional)
  //    - group items (either actionable or informational)
  // - footer (optional)
  //    - text or/and icons bar

});
