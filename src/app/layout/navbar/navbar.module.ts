import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { ShowLoggedInStatusDirective } from 'src/app/shared/directives/show-logged-in-status.directive';

// const routes: Routes = [
//   {
//     path: '',
//     component: NavbarComponent,
//   },
// ];
@NgModule({
  declarations: [NavbarComponent,ShowLoggedInStatusDirective],
  exports: [NavbarComponent],
  imports: [RouterModule],
})
export class NavbarModule {}