import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  login() {
    this.loginServ.login(new User(this.username, this.password))

  }

}
