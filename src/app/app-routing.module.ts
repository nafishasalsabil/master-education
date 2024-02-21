import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./authentication/sign-up/sign-up.module').then((m) => m.SingUpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
