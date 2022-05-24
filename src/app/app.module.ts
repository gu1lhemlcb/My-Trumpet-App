import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { ExerciceDetailComponent } from './exercice-detail/exercice-detail.component';
import { ExerciceService } from './services/exercices.service';

@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    ExerciceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ExerciceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
