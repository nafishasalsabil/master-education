import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('f') loginForm: NgForm;
  show: boolean;
  autohide = true;
  isLoading: boolean;
  tokenObj:any;
  user: SocialUser;
  loggedIn: boolean;
  hasError:boolean=false;
  constructor(private router:Router,private authService: SocialAuthService,private generalAuthService:AuthService){}
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.generalAuthService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(["/home"]);
        localStorage.setItem("token",res.token)
      },error:(er)=>{
       console.log(er);
       this.show = true;
      }
    })
    
    
  }
  onSignInSuccess(userData: any): void {
    console.log('Signed in as ', userData);
    // Handle the signed-in user's data, e.g., by sending it to your backend
  }
  gotoSignUp(){
    this.router.navigate(["/signup"])
  }

}
