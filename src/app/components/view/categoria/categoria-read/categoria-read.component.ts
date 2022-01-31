import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/login/auth.service';
import { Usuario } from 'src/app/components/login/usuario';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categorial.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.scss']
})
export class CategoriaReadComponent implements OnInit {

  mostrarBotao: boolean = false;

  constructor(private service: CategoriaService, private router: Router, private authService: AuthService) { }
  
// dataSource:
  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  usuario: Usuario = {
    id_user:0,
    nome:'',
    email:'',
    senha:''
  }

  ngOnInit(): void {
    this.findAll();

    this.authService.mostrarBotaoEmitter.subscribe(
      mostrar => {this.mostrarBotao = mostrar}
    )
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"]);
  }

  
}
