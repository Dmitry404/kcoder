import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { ExercisesListPageComponent } from './exercises/exercises-list';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { TrainingPageModule } from './training-page/training-page.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderNavbarComponent,
        ExercisesListPageComponent,
        PageNotFoundComponent
      ],
      imports: [AppRoutingModule, FormsModule, CodemirrorModule, TrainingPageModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });
});
