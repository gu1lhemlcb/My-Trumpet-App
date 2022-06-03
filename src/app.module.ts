import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ExercicesComponent } from './app/exercices-components/exercices/exercices.component';
import { ExerciceDetailComponent } from './app/exercices-components/exercice-detail/exercice-detail.component';
import { ExerciceService } from './app/services/exercices.service';
import { StopwatchComponent } from './app/shared/components/stopwatch/stopwatch.component';
import { StopwatchService } from './app/services/stopwatch.service';
import { SessionsComponent } from './app/sessions/sessions.component';
import { SessionService } from './app/services/session.service';
import { ExerciceEditorComponent } from './app/exercices-components/exercice-editor/exercice-editor.component';
import { AuthComponent } from './app/auth/auth.component';
import { AuthGuard } from './app/services/auth-guard.service';
import { AuthService } from './app/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ExercicesComponent,
    ExerciceDetailComponent,
    StopwatchComponent,
    SessionsComponent,
    ExerciceEditorComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ExerciceService,
    StopwatchService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
