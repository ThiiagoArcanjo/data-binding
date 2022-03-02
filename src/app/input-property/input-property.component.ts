import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeCurso:nome'] -> Também é possível usar o decorator aqui em cima
})
export class InputPropertyComponent implements OnInit {
  
  @Input('nome') nomeCurso: string ='';

  outraVariavel:any;

  constructor() { }

  ngOnInit(): void {
  }

}
