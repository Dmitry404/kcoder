import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExercisesListPageComponent } from './exercises-list-page/exercises-list-page.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseTrainZoneComponent } from './exercise-train-zone/exercise-train-zone.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ActionableNavbarComponent } from './actionable-navbar/actionable-navbar.component';
import { ActionableNavbarHeaderComponent } from './actionable-navbar/header/header-component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderNavbarComponent,
    ExercisesListPageComponent,
    PageNotFoundComponent,
    ExerciseTrainZoneComponent,
    ActionableNavbarComponent,
    ActionableNavbarHeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CodemirrorModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
