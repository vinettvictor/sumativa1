import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {


  tarjetas: [] = [];
  constructor(private http: HttpClient) { 
    console.log("tarjeta service")
    this.cargarTarjetas();
  }


  private cargarTarjetas(){
    this.http.get('assets/data/tarjeta.json').subscribe(
    (respuesta: any) => {
        this.tarjetas = respuesta.tarjetas;
        console.log("Respuesta para Productos: ", this.tarjetas);

    });
}
}
