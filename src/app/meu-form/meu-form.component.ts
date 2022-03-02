import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string ="Abc";
  
  pessoa: any = {
    nome: 'Def',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
