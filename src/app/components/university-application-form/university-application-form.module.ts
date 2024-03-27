import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityApplicationFormComponent } from './university-application-form.component';
import { UniversityApplicationFormRoutingModule } from './university-application-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [UniversityApplicationFormComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UniversityApplicationFormRoutingModule
  ],
})
export class UniversityApplicationFormModule { }
