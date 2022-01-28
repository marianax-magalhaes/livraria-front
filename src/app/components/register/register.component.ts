import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/usuario';

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

  constructor() { }

  ngOnInit(): void {
  }

}
