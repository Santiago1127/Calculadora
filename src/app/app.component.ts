import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  operandoA:number;
  operandoB:number;
  resultado:number;

  Sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

  Restar():void{
    this.resultado = this.operandoA - this.operandoB;
  }

  Dividir():void{
    this.resultado = this.operandoA / this.operandoB;
    
  }

  Multiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }

}
