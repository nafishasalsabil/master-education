import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutInfo:any;
  constructor(private dbs:DashboardService){}
  ngOnInit(): void {
    this.dbs.getAboutUs().subscribe({
      next:(res)=>{
        this.aboutInfo = res;
      }
    })
  }

}
