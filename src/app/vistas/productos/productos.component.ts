import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  //cantidad: number  = 0;
  index: number  | undefined | any;
  listaProductos: any[] = [];
  constructor(public productosService: ProductosService, public categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
  }


  agregar(id: number | any){
    id = id-1; //inicializamos la id en 0
    this.listaProductos.push(this.productosService.productos[id]); // agregamos los productos a nuestra nueva lista de productos
    console.log("Arreglos: ",this.listaProductos);

    //recorremos la lista para comparar si las id son iguales
    for(let prod in this.productosService.productos){
      if(this.productosService.productos[id].id == this.productosService.productos[prod].id){  
        this.listaProductos[prod].cantidad = this.listaProductos[prod].cantidad-1; // si las id coinciden , descuenta 1 de cantidad.
        this.listaProductos.join(this.listaProductos[prod]); //agregamos los datos actualizados al arreglo, pero solo reemplazando el valor "cantidad"
      } else {
        console.log("los id no son igual ")
      }
    }
    //console.log("Cantidad nueva: " + this.cantidad)
  
  }

}
