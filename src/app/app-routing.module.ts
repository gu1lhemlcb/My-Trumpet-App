import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ExerciceDetailComponent } from './exercices-components/exercice-detail/exercice-detail.component';
import { ExerciceEditorComponent } from './exercices-components/exercice-editor/exercice-editor.component';
import { ExercicesComponent } from './exercices-components/exercices/exercices.component';
import { AuthGuard } from './services/auth-guard.service';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "exercices", component: ExercicesComponent },
  { path: "exercices/add", canActivate: [AuthGuard], component: ExerciceEditorComponent},
  { path: "exercices/:id", canActivate: [AuthGuard], component: ExerciceDetailComponent },
  { path: "sessions", component: SessionsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
