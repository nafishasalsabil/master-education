import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Contains lazy-loaded routes
    NavbarModule, // Assuming NavbarModule is not lazy-loaded and used across the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
