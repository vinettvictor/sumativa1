import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    productos:  Producto[] = [];


    constructor(private http: HttpClient) {
        console.log("producto service")
        this.cargarProductos();
    }

    private cargarProductos(){
        this.http.get('assets/data/producto.json').subscribe(
        (respuesta: Producto | any) => {
            this.productos= respuesta.productos;
            console.log("Respuesta para Productos: ", this.productos);
        });
    }
}