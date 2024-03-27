import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityApplicationFormComponent } from './university-application-form.component';




const routes: Routes = [
  {
    path: '',
    component: UniversityApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityApplicationFormRoutingModule { }
