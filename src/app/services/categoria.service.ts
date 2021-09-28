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
    //this.cargarCategoriasWeb();
  }

  private cargarCategorias(){
    console.log("cargando categorias");

    //estructura base para consumir apis
    //this.http.get('url').subscribe((respuesta) => {});

    //lectura desde archivo json local
    this.http.get('assets/data/categoria.json').subscribe(
      (respuesta: any) => {
        console.log("Respuesta: ",respuesta);
        console.log("Productos: ",respuesta['frutas']);
        console.log("Pera: ",respuesta['frutas'][0]);

      });
  }

  private cargarCategoriasWeb(){
     //lectura desde la web
      this.http.get('https://learsixela.github.io/productos_json/productos.json').subscribe(
      (respuesta) => {
        console.log("Respuesta desde la web: ", respuesta);
    });
  }

}
