import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

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
        console.log(resposta);
      }, (error)=>{
        console.log("excecao")
      }
    );
  }

}
