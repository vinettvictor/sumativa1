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
    id = id-1;
    this.listaProductos.push(this.productosService.productos[id]);
    console.log("Arreglos: ",this.listaProductos);

    for(let prod in this.productosService.productos){
      if(this.productosService.productos[id].id == this.productosService.productos[prod].id){  
        this.listaProductos[prod].cantidad = this.listaProductos[prod].cantidad-1;
        this.listaProductos.join(this.listaProductos[prod]);     
      } else {
        console.log("los id no son igual ")
      }
    }
    //console.log("Cantidad nueva: " + this.cantidad)
  
  }

}
