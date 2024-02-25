import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
   
  }
  
  gotoLogin(){
    this.router.navigate(["/login"])
  }
  navigateAndScroll(sectionId: string) {
    // Navigate with a fragment
    this.router.navigate(['/home'], { fragment: sectionId }).then(() => {
      // Scroll to the section after navigation
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        sectionElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Timeout to allow for rendering
    });
  }

}
