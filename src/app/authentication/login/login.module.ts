import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes),GoogleSigninButtonModule],
})
export class LoginModule {}
