import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceDetailComponent } from './exercices-components/exercice-detail/exercice-detail.component';
import { ExerciceEditorComponent } from './exercices-components/exercice-editor/exercice-editor.component';
import { ExercicesComponent } from './exercices-components/exercices/exercices.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: "exercices", component: ExercicesComponent },
  { path: "exercices/add", component: ExerciceEditorComponent},
  { path: "exercices/:id", component: ExerciceDetailComponent },
  { path: "sessions", component: SessionsComponent}
  // add auth
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
