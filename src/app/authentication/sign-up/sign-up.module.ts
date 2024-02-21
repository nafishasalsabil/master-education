import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
];
@NgModule({
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class SingUpModule {}
