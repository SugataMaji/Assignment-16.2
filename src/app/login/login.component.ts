import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  airlinelist : Array<Object> = [];
    users=[];

  constructor(private _router: Router, private login:LoginService) { }

  ngOnInit() {
    this.users = this.login.getdata();
    this.loginform = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
    if(sessionStorage.setItem('access_token', 'true')){
    this._router.navigate(['/cricketersList']);
    }
  }
 /* loginuser(e){
    var username= e.target.elements[0].value;
    var password= e.target.elements[1].value;
    if(username == 'admin' && password == 'admin'){
       this._router.navigate(['/cricketersList']);
      }
  }*/
  loginuser(e){
    if(this.loginform.valid){
      this.login.adddata(this.loginform.value);
      this.users = this.login.getdata();
      console.log(this.users); 
      var username= e.target.elements[0].value;
    var password= e.target.elements[1].value;
      if(username == 'admin' && password == 'admin'){
       this._router.navigate(['/cricketersList']);
    }  
    else{
      console.log("Sorry, Wrong details. ");
    }
  }
}
}
