import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/shared/services/destination.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit{

  sideMenu:any[]=[];
  constructor(private destServ: DestinationService, private router: Router){}
 
  ngOnInit(): void {
    
    this.destServ.getSideMenu().subscribe({
      next:(res)=>{
        this.sideMenu = res;
      }
    })
  }
  gotoApply(){
    this.router.navigate(['/apply'])
  }

}
