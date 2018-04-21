import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { ExercisesListPageComponent } from './exercises/exercises-list';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseTrainZoneComponent } from './exercises/train-zone';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { SourceFilesComponent } from './exercises/source-files';
import { StatisticsComponent } from './exercises/statistics';
import { StatisticItemComponent } from './exercises/statistic-item';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderNavbarComponent,
        ExercisesListPageComponent,
        ExerciseTrainZoneComponent,
        SourceFilesComponent,
        StatisticsComponent,
        StatisticItemComponent,
        PageNotFoundComponent
      ],
      imports: [AppRoutingModule, FormsModule, CodemirrorModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });
});
