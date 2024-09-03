import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //private apiUrl = 'http://localhost:5287/Calculator';
  private apiUrl = 'http://localhost:5287';

  constructor(private http: HttpClient) { }

  sumar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/sumar?a=${a}&b=${b}`);
  }

  restar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/restar?a=${a}&b=${b}`);
  }

  multiplicar(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiplicar?a=${a}&b=${b}`);
  }

  dividir(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/dividir?a=${a}&b=${b}`);
  }

  factorial(n: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/factorial?n=${n}`);
  }
}
