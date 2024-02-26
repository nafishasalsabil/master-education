import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ServicesComponent } from 'src/app/components/services/services.component';

@NgModule({
  declarations: [DashboardComponent, CarouselComponent,AboutUsComponent,ServicesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
