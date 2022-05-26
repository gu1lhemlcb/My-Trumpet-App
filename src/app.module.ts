import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ExercicesComponent } from './app/exercices/exercices.component';
import { ExerciceDetailComponent } from './app/exercice-detail/exercice-detail.component';
import { ExerciceService } from './app/services/exercices.service';
import { StopwatchComponent } from './app/stopwatch/stopwatch.component';
import { StopwatchService } from './app/services/stopwatch.service';


@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    ExerciceDetailComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ExerciceService,
    StopwatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
