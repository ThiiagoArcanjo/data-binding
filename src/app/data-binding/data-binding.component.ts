import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }   
    `
  ] */
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://thiago.com';
  
  cursoAngular: boolean = true;
  
  urlImagem = 'http://lorempixel.com.br/400/200/nature';
  
  valorAtual: string = "";
  
  valorSalvo: any;
  
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;
  
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
   // console.log((<HTMLInputElement>evento.target).value); //tipo HTML Input precisa dessa tag para funcionar
   this.valorAtual = (<HTMLInputElement>evento.target).value;
    
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver  = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
