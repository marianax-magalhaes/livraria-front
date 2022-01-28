import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  usuario: Usuario = {
    id_user:0,
    nome:'',
    email:'',
    senha:''
  }

  msg: String = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.usuario).subscribe((resposta)=>{
    console.log("recebido")
      this.router.navigate(['/login'])
      this.service.mensagem("Cadastro realizado com sucesso!")
  }, err => {
    console.log("excecao")
    this.msg=err.error;
  })
  };
}
