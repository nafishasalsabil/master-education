import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  countries:any[]=[];
  constructor(private dbs: DashboardService, private router:Router){}
  ngOnInit(): void {
    this.dbs.getCountries().subscribe({
      next:(res)=>{
        this.countries = res;
      }
    })
  }
  gotoDetails(id:any){
    this.router.navigate([`/destination-detail/${id}`])
  }

}
