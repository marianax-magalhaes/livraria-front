import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.scss']
})
export class CategoriaReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
}
