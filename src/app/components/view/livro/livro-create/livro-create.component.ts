import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.scss']
})
export class LivroCreateComponent implements OnInit {

  titulo=new FormControl('', Validators.minLength(3));
  nome_autor=new FormControl('', Validators.minLength(10));
  texto=new FormControl('', Validators.minLength(10));

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    if(this.titulo.invalid){
      return "O campo título deve conter entre 3 e 50 caracteres";
  } 
    return false;
  }

  getMessage1(){
    if(this.nome_autor.invalid){
      return "O campo nome do autor deve conter entre 3 e 50 caracteres";
    } return false;
  }

  getMessage2(){
    if(this.texto.invalid){
      return "O campo texto deve conter entre 10 e 2.000.000 caracteres";
    } return false;
  }
}
