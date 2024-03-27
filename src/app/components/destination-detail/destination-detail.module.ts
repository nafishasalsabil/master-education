import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationDetailRoutingModule } from './detination-detail-routing.module';
import { DestinationDetailComponent } from './destination-detail.component';





@NgModule({
  declarations: [DestinationDetailComponent],
  imports: [
    CommonModule,
    DestinationDetailRoutingModule
  ],
})
export class DestinationDetailModule { }
