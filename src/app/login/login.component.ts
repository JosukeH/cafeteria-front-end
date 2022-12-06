import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginServe:AuthService, private router: Router){}

  ngOnInit():void{
    
  }

  email = ''
  password= ''
  error = ''
  login(){
    console.log('click');
    const email = this.email
    const password = this.password
    console.log({email, password});
     this._loginServe.login({email, password}).subscribe(
      res => {
        console.log('res')
        console.log(res)
        this._loginServe.saveUser(res)
        this.router.navigate(['/Home'])
      },
      err => {
        this.error = err.error
        console.log(err)
      },
      () => console.log('fin')
    
      )
    
  }

}
