import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  mostrarBotaoEmitter = new EventEmitter<boolean>();

  storage!: Storage

  constructor(private router: Router, private http: HttpClient, private snack: MatSnackBar) { }

  // desisti desse
  // login(usuario:Usuario){
  //   return this.http.post(this.baseUrl + '/login', JSON.stringify(usuario)).subscribe((resposta)=>{
  //     console.log(JSON.parse(JSON.stringify(resposta)))
  //   })
  // }

  //com api e banco
  // nao consegui fazer com heroku
  loginUserFromRemote(user:Usuario):Observable<any>{
    return this.http.post<any>("http://localhost:8080/login", user);
  }

  registerUserFromRemote(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/cadastro", user);
  }

  mostrarMenu(){
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true);
  }

  mostrarBotao(){
    this.mostrarBotaoEmitter.emit(true);
  }

  //com hardcode no back
  fazerLogin(usuario:Usuario){
    if(usuario.nome==='usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['']);
    } else{
      this.usuarioAutenticado=false
      this.mostrarMenuEmitter.emit(false)
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  mensagem(str: string): void{
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    })
  } 

  localStorage(key:string, user: Usuario){
    // var localData = [];
    // var data = window.localStorage.getItem(key!);
    // if(data){
    //   data = JSON.parse(data)
    // } else{
      localStorage.setItem(key, JSON.stringify(user));
    // }
    
  }

  // getLocalStorage(key:string):any{
  //   return JSON.parse(this.storage.getItem(key))
  //   }
  
  AdminLogado(user:Usuario){
    if(user.nome==='adm@email.com' && user.senha === 'adm'){
      this.mostrarBotao();
    } 
    }
  
}
