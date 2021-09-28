import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //ng g s services/categoria
  constructor(private http: HttpClient) {
    console.log("categoria service")
    this.cargarCategorias();
  }

  private cargarCategorias(){
    console.log("cargando categorias");

    //estructura base para consumir apis
    //this.http.get('url').subscribe((respuesta) => {});;
    this.http.get('assets/data/producto.json').subscribe(
      (respuesta) => {
        console.log(respuesta);

      });
  }
}
