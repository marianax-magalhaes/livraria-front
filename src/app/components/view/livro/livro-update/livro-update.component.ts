import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.scss']
})
export class LivroUpdateComponent implements OnInit {
  
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
    this.id_cat=this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
    this.service.findById(this.livro.id).subscribe((resposta)=>{
      this.livro=resposta;

    })
  }

  update(): void{
    this.service.update(this.livro).subscribe((resposta)=>{
      this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
      this.service.mensagem("Livro atualizado com sucesso!")
    }, err => {
      this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
      this.service.mensagem("Falha ao atualizar livro, tente mais tarde!")
    })
  }

  cancel(): void{
    this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
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
