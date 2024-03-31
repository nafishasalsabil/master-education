import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCounsellingComponent } from './book-counselling.component';
import { BookCounsellingRoutingModule } from './book-counselling-routing.module';



@NgModule({
  declarations: [BookCounsellingComponent],
  imports: [
    CommonModule,
    BookCounsellingRoutingModule
  ],
})
export class BookCounsellingModule { }
