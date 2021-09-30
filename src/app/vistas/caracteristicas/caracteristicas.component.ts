import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {


  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }

  eliminar(producto: Producto | any): void{
    
    console.log("Eliminando id ...: ", producto.id);

    let eliminar = this.productosService.lista_productos.findIndex(
      prod => prod.id === producto.id
    );

    console.log("Eliminando producto: ", producto)
    this.productosService.lista_productos.splice(eliminar, 1);
  }
}
