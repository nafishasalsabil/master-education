import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: NavbarComponent,
//   },
// ];
@NgModule({
  declarations: [NavbarComponent,],
  exports: [NavbarComponent],
  imports: [RouterModule],
})
export class NavbarModule {}