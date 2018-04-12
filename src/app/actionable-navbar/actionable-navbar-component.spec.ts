import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableNavbarComponent } from './actionable-navbar.component';
import { ActionableNavbarHeaderComponent } from './header/header-component';

describe('ActionableNavbarComponent', () => {
  let component: ActionableNavbarComponent;
  let fixture: ComponentFixture<ActionableNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionableNavbarComponent,
        ActionableNavbarHeaderComponent
      ],
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
  // -
  // - group:
  //    - group header + action bar(optional)
  //    - group items (either actionable or informational)
  // - footer (optional)
  //    - text or/and icons bar

  it('should contain header', () => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const header: Element = nativeElement.querySelector('app-actionable-navbar-header');

    expect(header).toBeTruthy();
  });

  it('should contain group of items', () => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const groupOfElements = nativeElement.querySelector('app-actionable-navbar-elements');
    // with at least one group
    
  });
});
