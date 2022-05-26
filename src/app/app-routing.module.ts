import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExerciceDetailComponent } from './exercice-detail/exercice-detail.component';
import { ExercicesComponent } from './exercices/exercices.component';

const routes: Routes = [
  { path: "exercices", component: ExercicesComponent },
  { path: "exercices/:id", component: ExerciceDetailComponent },
  // add auth
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
