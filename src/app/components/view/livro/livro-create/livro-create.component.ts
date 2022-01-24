import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.scss']
})
export class LivroCreateComponent implements OnInit {

  titulo=new FormControl('', Validators.minLength(3));
  nome_autor=new FormControl('', Validators.minLength(10));
  texto=new FormControl('', Validators.minLength(10));

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) { }

id_cat: String="";
livro: Livro={
  id:'',
  titulo:'',
  nome_autor:'',
  texto:''
}

  ngOnInit(): void {
    this.id_cat=this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void{
    this.service.create(this.livro, this.id_cat).subscribe((resposta)=>{
      this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
      this.service.mensagem("Livro adicionado com sucesso!");
      }, err => {
        this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
        this.service.mensagem("Erro na adição de novo livro, tente mais tarde!");
      });
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
