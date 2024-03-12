import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';

@NgModule({
  declarations: [DashboardComponent,CarouselComponent,ServicesComponent,AboutUsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
