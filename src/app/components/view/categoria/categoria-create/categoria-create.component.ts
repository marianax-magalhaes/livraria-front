import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categorial.model';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.scss']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria={
    nome:'',
    descricao:''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categoria).subscribe((resposta)=>{
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria criada com sucesso!")
    }, err =>{
      for(var i=0; i< err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    });
  }

  cancel():void{
    this.router.navigate(["categorias"])
  }
}
