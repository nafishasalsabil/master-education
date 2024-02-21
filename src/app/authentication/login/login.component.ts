import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('f') loginForm: NgForm;
  loggedIn: boolean;
  show: boolean;
  autohide = true;
  user: any;
  isLoading: boolean;
  tokenObj:any;
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(){
    
  }

}
