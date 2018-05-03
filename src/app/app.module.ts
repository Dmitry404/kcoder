import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExercisesListPageComponent } from './exercises/exercises-list';
import { AppRoutingModule } from './app.routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TrainingPageModule } from './training-page/training-page.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderNavbarComponent,
    ExercisesListPageComponent
  ],
  imports: [
    TrainingPageModule,
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
