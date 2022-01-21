import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categorial.model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.scss']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria= {
    id:"",
    nome:"",
    descricao:""

  }
  constructor(private router: Router, private service: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }

  findById(): void{
    this.service.findById(this.categoria.id!).subscribe((resposta) =>{
      this.categoria = resposta
      console.log(this.categoria)
    });
  }

  update():void{
    this.service.update(this.categoria).subscribe((resposta)=>{
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria atualizada com sucesso!")
    }, err=>{
      console.log(err)
    })
  }

  cancel(): void{
    this.router.navigate(["categorias"])
  }

}
