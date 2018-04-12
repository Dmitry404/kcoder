import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionableNavbarHeaderComponent } from './header-component';

describe('ActionableNavbarHeaderComponent', () => {
  let component: ActionableNavbarHeaderComponent;
  let fixture: ComponentFixture<ActionableNavbarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionableNavbarHeaderComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionableNavbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // - header:
  //   - text(can be empty) or icons bar(optional)
});
