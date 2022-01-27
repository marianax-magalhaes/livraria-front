import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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

  constructor(private router: Router, private http: HttpClient) { }

  // desisti desse
  login(usuario:Usuario){
    return this.http.post(this.baseUrl + '/login', JSON.stringify(usuario)).subscribe((resposta)=>{
      console.log(JSON.parse(JSON.stringify(resposta)))
    })
  }

  //com api e banco
  loginUserFromRemote(user:Usuario):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/login", user)
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
}
