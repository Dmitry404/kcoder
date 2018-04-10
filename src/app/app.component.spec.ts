import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { ExercisesListPageComponent } from './exercises-list-page/exercises-list-page.component';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
      imports: [AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });
});
