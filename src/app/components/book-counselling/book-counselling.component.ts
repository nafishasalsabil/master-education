import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-counselling',
  templateUrl: './book-counselling.component.html',
  styleUrls: ['./book-counselling.component.scss'],
})
export class BookCounsellingComponent implements OnInit {
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  emptyDaysAtStart: number;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  currentDate: Date | null = new Date();
  today: Date | null = new Date();
  daysInMonth: Date[] = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.daysInMonth = [];
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);

    this.emptyDaysAtStart = firstDayOfMonth.getDay(); // Sunday - 0, Monday - 1, etc.
    for (
      let day = firstDayOfMonth;
      day <= lastDayOfMonth;
      day.setDate(day.getDate() + 1)
    ) {
      this.daysInMonth.push(new Date(day));
    }
  }
  isToday(day: Date) {
    return (
      this.today &&
      day.getDate() === this.today.getDate() &&
      day.getMonth() === this.today.getMonth() &&
      day.getFullYear() === this.today.getFullYear()
    );
  }
  

  isSelectedDay(day: Date) {
    return (
      this.currentDate &&
      day.getDate() === this.currentDate.getDate() &&
      day.getMonth() === this.currentDate.getMonth() &&
      day.getFullYear() === this.currentDate.getFullYear()
    );
  }
  selectDate(date: Date): void {
    this.currentDate = date;
  }
  goToNextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  goToPreviousMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }
  get emptyDaysAtEnd(): number {
    // Calculate how many empty slots are needed at the end of the last week of the month
    const totalSlots = this.emptyDaysAtStart + this.daysInMonth.length;
    return totalSlots % 7 === 0 ? 0 : 7 - (totalSlots % 7);
  }
}
