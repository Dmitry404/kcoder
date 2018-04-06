import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExercisesListPageComponent } from './exercises-list-page/exercises-list-page.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    ExercisesListPageComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    FormsModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
