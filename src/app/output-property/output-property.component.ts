import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // outputs: ['mudouValor'] -> Também pode-se expor o metodo aqui, porém é preferivel na declaração do próprio método
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  //@Output() decoretor para expor eventos
  @Output() mudouValor = new EventEmitter(); //Emissor de eventos

  incrementa(){
    this.valor +=1;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(): void{
    this.valor -=1;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
