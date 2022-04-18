import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TiempoService {
  constructor(private http: HttpClient) {}

  obtenerTiempo(ciudad: string) {

    return this.http.get(
      `http://api.weatherapi.com/v1/forecast.json?key=04432153f5ad4bc48b2150152222903&q=${ciudad}&days=3`
    );
  }
}
