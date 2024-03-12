import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { DestinationsRoutingModule } from './destination-routing.module';




@NgModule({
  declarations: [DestinationsComponent],
  imports: [
    CommonModule,
    DestinationsRoutingModule
  ],
})
export class DestinationsModule { }
