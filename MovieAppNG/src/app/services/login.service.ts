import { Injectable } from '@angular/core';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  currentUser: User;

  login(user: User) {

    console.log(user)
    if(user && user.username && user.password) {
      this.currentUser = user;
    } else {
      console.log("Invalid Login");
    }
  }

  logout() {
    this.currentUser = null;
  }
}
