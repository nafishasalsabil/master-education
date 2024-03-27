import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationDetailComponent } from './destination-detail.component';



const routes: Routes = [
  {
    path: '',
    component: DestinationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationDetailRoutingModule { }
