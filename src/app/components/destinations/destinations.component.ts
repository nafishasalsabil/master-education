import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  countries:any[]=[];
  constructor(private dbs: DashboardService){}
  ngOnInit(): void {
    this.dbs.getCountries().subscribe({
      next:(res)=>{
        this.countries = res;
      }
    })
  }

}
