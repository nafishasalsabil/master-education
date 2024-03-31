import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCounsellingComponent } from './book-counselling.component';



const routes: Routes = [
  {
    path: '',
    component: BookCounsellingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookCounsellingRoutingModule { }
