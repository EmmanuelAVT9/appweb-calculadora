import { Component } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';  // Display de la calculadora que muestra los números y resultados
  num1: number = 0;  // Primer número para operaciones
  num2: number = 0;  // Segundo número para operaciones
  resultado: number | string = '';  // Resultado de la operación
  operator: string = '';  // Operador seleccionado (+, -, ×, ÷)
  shouldResetDisplay: boolean = false;  // Indica si el display debe reiniciarse después de mostrar el resultado
  factorialProcess: string = ''; // Almacena el proceso del factorial


  constructor(private calculadoraService: CalculadoraService) { }

  /**
   * Agrega un número o símbolo al display cuando se presiona un botón.
   * @param key Número o símbolo presionado
   */
  pressKey(key: string) {
    if (this.shouldResetDisplay) {
      this.display = '';
      this.shouldResetDisplay = false;
    }
    this.display += key;
  }

  /**
   * Configura la operación matemática seleccionada y guarda el primer número.
   * @param op Operador seleccionado
   */
  setOperation(op: string) {
    if (this.display) {
      this.num1 = parseFloat(this.display);
      this.operator = op;
      this.display = '';
    }
  }

  /**
   * Realiza la operación matemática basada en el operador seleccionado.
   */
  calculate() {
    if (this.display) {
      this.num2 = parseFloat(this.display);
      switch (this.operator) {
        case '+':
          this.calculadoraService.sumar(this.num1, this.num2).subscribe(res => this.displayResult(res));
          break;
        case '-':
          this.calculadoraService.restar(this.num1, this.num2).subscribe(res => this.displayResult(res));
          break;
        case '×':
          this.calculadoraService.multiplicar(this.num1, this.num2).subscribe(res => this.displayResult(res));
          break;
        case '÷':
          this.calculadoraService.dividir(this.num1, this.num2).subscribe(
            res => this.displayResult(res),
            err => this.displayResult(err.error)
          );
          break;
      }
    }
  }

  /**
   * Calcula el factorial si solo se ha ingresado un número y se selecciona el operador factorial.
   */


  calculateFactorial() {
    if (this.display) {
      const n = parseInt(this.display);
      this.calculadoraService.factorial(n).subscribe(res => {
        this.displayResult(res);       // Muestra el resultado en la pantalla.
        this.showFactorialProcess(n, res);  // Muestra el proceso del cálculo del factorial.
      });
    }
  }

  /**
   * Genera y muestra el proceso paso a paso del cálculo del factorial.
   * @param n El número del cual se calcula el factorial.
   * @param result El resultado del factorial.
   */

  showFactorialProcess(n: number, result: number) {
    let process = '';
    for (let i = n; i > 1; i--) {
      process += `${i} × `;
    }
    process += `1 = ${result}`;
    this.factorialProcess = process;
  }

  /**
   * Muestra el resultado en el display.
   * @param result Resultado de la operación matemática
   */
  displayResult(result: number | string) {
    this.display = result.toString();
    this.shouldResetDisplay = true;
  }

  /**
   * Reinicia el display y resetea todos los valores.
   */
  clear() {
    this.display = '';
    this.num1 = 0;
    this.num2 = 0;
    this.operator = '';
  }

  /**
   * Borra la última entrada en el display.
   */
  clearEntry() {
    this.display = '';
  }

  /**
   * Elimina el último carácter del display.
   */
  backspace() {
    this.display = this.display.slice(0, -1);
  }
}
