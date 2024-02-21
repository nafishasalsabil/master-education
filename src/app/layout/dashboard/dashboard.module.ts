import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [ RouterModule.forChild(routes)],
})
export class DashboardModule {}
