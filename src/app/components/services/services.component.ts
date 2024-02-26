import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  serv:any[]=[];
  constructor(private dashServ:DashboardService){}
  ngOnInit(): void {
    this.dashServ.getServices().subscribe({
      next:(res)=>{
        console.log(res);
        this.serv = res;
        
      }
    })
  }

}
