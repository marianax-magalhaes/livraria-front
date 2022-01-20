import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categorial.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.scss']
})
export class CategoriaReadComponent implements OnInit {

  constructor(private service: CategoriaService) { }
  
// dataSource:
  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

  
}
