import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: any;

  constructor( private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authservice.login(this.username, this.password)
    .subscribe( res =>{
      this.router.navigate(['/todos'])
    })
    // if(this.authservice.login(this.username, this.password)){
    //   this.router.navigate(['todos'])
    // }
  }

  onClear() {
    this.username = '';
    this.password = '';
  }

}
