import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ExerciceDetailComponent } from './exercices-components/exercice-detail/exercice-detail.component';
import { ExerciceEditorComponent } from './exercices-components/exercice-editor/exercice-editor.component';
import { ExercicesComponent } from './exercices-components/exercices/exercices.component';
import { HomeComponent } from './home/home.component';
import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { AuthGuard } from './services/auth-guard.service';
import { SessionEditorComponent } from './sessions-components/session-editor/session-editor.component';
import { SessionsComponent } from './sessions-components/sessions/sessions.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", component: AuthComponent },
  { path: "exercices", component: ExercicesComponent },
  { path: "exercices/add", canActivate: [AuthGuard], component: ExerciceEditorComponent},
  { path: "exercices/:id", canActivate: [AuthGuard], component: ExerciceDetailComponent },
  { path: "sessions", canActivate: [AuthGuard], component: SessionsComponent },
  { path: "sessions/add", canActivate: [AuthGuard], component: SessionEditorComponent },
  { path: "test", component: NgbdDatepickerPopupComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
