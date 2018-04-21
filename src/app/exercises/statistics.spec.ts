import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsComponent } from './statistics';
import { StatisticItemComponent } from './statistic-item';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent, StatisticItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has four items with default "0" values each', () => {
    const element = fixture.debugElement.nativeElement;
    const exercises = element.querySelectorAll('.statistic-item');

    expect(exercises[0].textContent).toEqual('Failed runs: 0');
    expect(exercises[1].textContent).toEqual('Syntax errors: 0');
    expect(exercises[2].textContent).toEqual('Successful runs: 0');
    expect(exercises[3].textContent).toEqual('Total runs: 0');
  });
});
