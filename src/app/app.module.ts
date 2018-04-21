import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ExercisesListPageComponent } from './exercises/exercises-list';
import { SourceFilesComponent } from './exercises/source-files';
import { AppRoutingModule } from './app.routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseTrainZoneComponent } from './exercises/train-zone';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StatisticsComponent } from './exercises/statistics';
import { StatisticItemComponent } from './exercises/statistic-item';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderNavbarComponent,
    ExercisesListPageComponent,
    SourceFilesComponent,
    StatisticsComponent,
    StatisticItemComponent,
    PageNotFoundComponent,
    ExerciseTrainZoneComponent
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
