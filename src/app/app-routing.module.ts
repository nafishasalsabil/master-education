import { DestinationsModule } from './components/destinations/destinations.module';
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
  // {
  //   path: 'about-us',
  //   loadChildren: () =>
  //     import('./components/about-us/about-us.module').then((m) => m.AboutUsModule),
  // },
  // {
  //   path: 'services',
  //   loadChildren: () =>
  //     import('./components/services/services.module').then((m) => m.ServicesUsModule),
  // },
  {
    path: 'destinations',
    loadChildren: () =>
      import('./components/destinations/destinations.module').then((m) => m.DestinationsModule),
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
