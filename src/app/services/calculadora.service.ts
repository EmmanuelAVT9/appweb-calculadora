import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  private apiUrl = 'http://localhost:5287';

  constructor(private http: HttpClient) { }

  /**
   * Realiza una suma entre dos números.
   * @param a Primer número
   * @param b Segundo número
   * @returns Observable con el resultado de la suma
   */
  sumar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/sumar?a=${a}&b=${b}`);
  }

  /**
   * Realiza una resta entre dos números.
   * @param a Primer número
   * @param b Segundo número
   * @returns Observable con el resultado de la resta
   */
  restar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/restar?a=${a}&b=${b}`);
  }

  /**
   * Realiza una multiplicación entre dos números.
   * @param a Primer número
   * @param b Segundo número
   * @returns Observable con el resultado de la multiplicación
   */
  multiplicar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiplicar?a=${a}&b=${b}`);
  }

  /**
   * Realiza una división entre dos números.
   * @param a Primer número
   * @param b Segundo número
   * @returns Observable con el resultado de la división
   */
  dividir(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/dividir?a=${a}&b=${b}`);
  }

  /**
   * Calcula el factorial de un número.
   * @param n Número para calcular el factorial
   * @returns Observable con el resultado del factorial
   */
  factorial(n: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/factorial?n=${n}`);
  }
}
