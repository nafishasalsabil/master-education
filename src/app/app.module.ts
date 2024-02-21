import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';
import { SingUpModule } from './authentication/sign-up/sign-up.module';
import { LoginModule } from './authentication/login/login.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SingUpModule,
    LoginModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
