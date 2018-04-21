import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticItem, StatisticItemComponent } from './statistic-item';

describe('StatisticItemComponent', () => {
  let component: StatisticItemComponent;
  let fixture: ComponentFixture<StatisticItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticItemComponent);
    component = fixture.componentInstance;
    component.item = new StatisticItem('text', 0);
    fixture.detectChanges();
  });

  it('should correctly render statistic item', () => {
    const element = fixture.debugElement.nativeElement;
    const item = element.querySelector('.statistic-item');

    expect(item.textContent).toEqual('text: 0');
  });
});
