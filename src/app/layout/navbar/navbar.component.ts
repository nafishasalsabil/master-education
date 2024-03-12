import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLoggedIn:boolean ;
  constructor(private router:Router, private loginService:AuthService){}
  ngOnInit(): void {

   if(localStorage.getItem("token")){
    this.isLoggedIn = true;
   }
   else{
    this.isLoggedIn = false;
   }
   console.log(this.isLoggedIn);
   
  }
  
  gotoLogin(){
    this.router.navigate(["/login"])
  }
  navigateAndScroll(sectionId: string) {
   
    this.router.navigate([`/home`], { fragment: sectionId }).then(() => {
     
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 100); 
    });
  }
  logout(){
    this.loginService.logout().subscribe({
      next:(res)=>{
        this.isLoggedIn = false;
        localStorage.removeItem("token")
        this.router.navigate(["/home"])
      }
    })
  }

}
