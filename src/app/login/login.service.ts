import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  getdata(){
   const users= sessionStorage.getItem("users");
   if(users){
     return JSON.parse(users);
   }
   return[];
  }
  adddata(user){
    const usersformdata= sessionStorage.getItem("users");
     if(usersformdata){
       let users = JSON.parse(usersformdata);
       users.push(user);
       sessionStorage.setItem("users", JSON.stringify(users));
     }
     else{
       sessionStorage.setItem("users", JSON.stringify([]));
     }
  }

}
