import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  Titulo: string = 'Curso Angular Basico';
  Titulo2: string = 'Formulario';
  Detalle: string = 'Esta a punt ode realizar una accion';

  nombre: string | any = '';
  Informacion: string | any = '';
  Precio: string | any = '';
  cantidad: string | any = '';


  //cantidad: number  = 0;
  index: number  | undefined | any;
  
  carrito: number= 0;

  constructor(public productosService: ProductosService, public categoriaService: CategoriaService) {
    
  }


  ngOnInit(): void {
  }


  agregar(producto: Producto | any): void {
    
    this.index = producto.id; //le pasamos el id del producto al index

    console.log(this.index);

    for (let prod in this.productosService.productos){ //recorremos los productos
      if(this.index == this.productosService.productos[prod].id){ // comparamos si las id son iguales
          producto.cantidad--; //si son iguales, descuenta 1 a la cantidad
          this.productosService.lista_productos.push(producto); // y agrega un producto a la lista de productos nuevas
          console.log("el id es correcto"+this.productosService.lista_productos[prod].id );
      } else {
        console.log("el id no coincide ");
      }
    }



    //console.log("el id es: ", id);
    //id = id - 1;//inicializamos la id en 0


    //this.listaProductos.push(this.productosService.productos[id]); // agregamos los productos a nuestra nueva lista de productos

    //console.log("cantidad en arreglo:",this.listaProductos);
    //recorremos la lista para comparar si las id son iguales
    /** 
    for(let prod in this.productosService.productos){

      if(this.productosService.productos[id].id == this.productosService.productos[prod].id){ 
        this.listaProductos[prod].cantidad = this.listaProductos[prod].cantidad-1; // si las id coinciden , descuenta 1 de cantidad.
        this.listaProductos.join(this.listaProductos[prod]); //agregamos los datos actualizados al arreglo, pero solo reemplazando el valor "cantidad"
      
      } else {
        console.log("los id no son igual ")
      }
      
    }
    */
    //console.log("Cantidad nueva: " + this.cantidad)
    
    //this.carrito = this.listaProductos.length;
  }

  obtenerInformacion(id: number | any ): void{
    this.nombre = this.productosService.productos[id].nombre;
    this.Informacion = this.productosService.productos[id].descripcion;
    this.Precio = this.productosService.productos[id].precio;
    this.cantidad = this.productosService.productos[id].cantidad;
  }
}
