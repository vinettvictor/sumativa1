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
  listaProductos: Producto[] = [];

  constructor(public productosService: ProductosService, public categoriaService: CategoriaService) {
    
  }


  ngOnInit(): void {
  }


  agregar(producto: Producto): void {

    this.listaProductos.push(producto);
    
    this.productosService.lista_productos.push(producto);

    console.log(this.productosService.lista_productos);
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
