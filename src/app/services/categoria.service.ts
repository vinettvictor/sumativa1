import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //declare variable
  categoria: Categoria = {};



  //ng g s services/categoria
  constructor(private http: HttpClient) {
    console.log("categoria service")
    this.cargarCategoriasOld();
    this.cargarCategorias();
    //this.cargarCategoriasWeb();
  }

  //metodo para cargar sin interfaces
  private cargarCategoriasOld(){
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

  //metodo con interfaces
  private cargarCategorias(){
    //estructura base para consumir apis
    //this.http.get('url').subscribe((respuesta) => {});

    //lectura desde archivo json local
    this.http.get('assets/data/categoria.json').subscribe(
      (respuesta: Categoria) => {
        this.categoria = respuesta;

        console.log("Respuesta: ",this.categoria);
        //console.log("Productos: ",respuesta['frutas']);
        //console.log("Pera: ",respuesta['frutas']);

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
