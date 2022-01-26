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
    nome:'',
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

}
