import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // botao do olhinho da senha
  hide = true;

  form: any;

  usuario: Usuario = {
    id_user:0,
    nome:'',
    email:'',
    senha:''
  }

  // usuarios: Usuario[]=[];

  msg: String = '';

  private storage!: Storage;

  constructor(private authService: AuthService, private router: Router) { 

    // console.log(JSON.parse(this.storage.getItem("login")));
  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //     id_user: new FormControl(),
    //     nome: new FormControl(),
    //     email: new FormControl(),
    //     senha: new FormControl()
    // })
    
    
  }

  // fazerlogin(){
  //   console.log(this.usuario);
  //   this.authService.fazerLogin(this.usuario);
  // }

  // tentativa abandonada
  // login(){
  //   this.authService.login(this.usuario);
  // }

  loginUser(){
    this.authService.loginUserFromRemote(this.usuario).subscribe(
      (resposta)=>{
        this.router.navigate([''])
        this.authService.mostrarMenu();
        this.authService.localStorage("login", resposta);
        this.authService.AdminLogado(resposta);
        
      }, err =>{
        this.msg="Email e/ou senha inválido(s)."
      }
    );
  }


  gotoregistration(){
    this.router.navigate(['/register'])
  }



}
