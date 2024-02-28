import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carousel:any[]=[];
  constructor(private dbs: DashboardService){}
  ngOnInit(): void {{
    this.dbs.getCarousel().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.carousel = res;
      }
    })
  }
  }
}
