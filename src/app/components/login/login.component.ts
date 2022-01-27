import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario: Usuario = {
    id_user:0,
    nome:'',
    email:'',
    senha:''
  }

  msg: String = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerlogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

  // tentativa abandonada
  login(){
    this.authService.login(this.usuario);
  }

  loginUser(){
    this.authService.loginUserFromRemote(this.usuario).subscribe(
      (resposta)=>{
        console.log("response recieved");
        this.router.navigate([''])
       
      }, err =>{
        console.log("exception occurs");
        this.msg="Email e/ou senha inválido(s)."
      }
    );
  }

  gotoregistration(){
    this.router.navigate(['/register'])
  }



}
