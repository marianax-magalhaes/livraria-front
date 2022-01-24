import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.scss']
})
export class LivroDeleteComponent implements OnInit {

  titulo=new FormControl('');
  nome_autor=new FormControl('');
  texto=new FormControl('');

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

  delete():void{
    this.service.delete(this.livro.id!).subscribe(()=>{
      this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
      this.service.mensagem("Livro deletado com sucesso!")
    }, err =>{
      this.router.navigate(["categorias/"+this.id_cat+"/livros"]);
      this.service.mensagem("Falha ao deletar o livro, tente mais tarde!")
    })
  }

}
