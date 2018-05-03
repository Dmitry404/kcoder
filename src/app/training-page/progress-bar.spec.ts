import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar';
import { ProgressItemComponent } from './progress-item';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarComponent, ProgressItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has 0 runs when loaded', () => {
    const element = fixture.debugElement;

    expect(element.queryAll(By.css('.badge-status')).length).toEqual(0);
  });

  it('has 1 run when clicked submit button', fakeAsync(() => {
    const element = fixture.debugElement;
    let button = element.query(By.css('.text-btn')).nativeElement;
    button.click();

    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.badge-status')).length).toEqual(1);
  }));
});
