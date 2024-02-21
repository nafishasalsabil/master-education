import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  signUpForm: FormGroup;
  constructor(){

  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      "username" : new FormControl(null,Validators.required),
      "email" : new FormControl(null,[Validators.required,Validators.email]),
      "password" : new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
  onSubmit(){
    console.log(this.signUpForm.value);
    
  }
}
