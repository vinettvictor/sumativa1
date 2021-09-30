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
  Mensaje: string = 'Se agrego con Exito el producto a tu carrito de compras';

  Nombre: string | any = '';
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
    
    this.index = producto.id - 1; //le pasamos el id del producto al index

    console.log(this.index);

    for (let prod in this.productosService.productos){ //recorremos los productos
      if(producto.id == this.productosService.productos[prod].id){ // comparamos si las id son iguales
          console.log("id coinciden: ")
          producto.cantidad--; //si son iguales, descuenta 1 a la cantidad
          this.productosService.lista_productos.push(producto); // y agrega un producto a la lista de productos nuevas
          
      } else {
        console.log("el id no coincide ");
      }
    }
  }

  eliminar(): void{
    this.productosService.lista_productos.pop();
  }

  obtenerInformacion(producto: Producto | any ): void{
    this.index = producto.id-1;
    console.log(this.index);

    for (let prod in this.productosService.productos){ 
      if(producto.id == this.productosService.productos[prod].id){
        console.log("id coinciden: ")
        this.Nombre = this.productosService.productos[this.index].nombre;
        this.Informacion = this.productosService.productos[this.index].descripcion;
        this.Precio = this.productosService.productos[this.index].precio;
        this.cantidad = this.productosService.productos[this.index].cantidad;
      }
    }
  }

  buscarProducto(nombre: string | any) {

    console.log("id obtenido: ", nombre)

    for (let prod in this.productosService.productos){ 
      if(nombre.trim() == this.productosService.productos[prod].nombre){
          console.log("producto encontrado", this.productosService.productos[prod]);
          this.Nombre = this.productosService.productos[prod].nombre;
          this.Informacion = this.productosService.productos[prod].descripcion;
          this.Precio = this.productosService.productos[prod].precio;
          this.cantidad = this.productosService.productos[prod].cantidad;
          console.log(this.Nombre);
          console.log(this.Informacion);
          console.log(this.Precio);
          console.log(this.cantidad);
      } else {
        console.log("Producto no encontrado");
      }
  
  }
}
}
