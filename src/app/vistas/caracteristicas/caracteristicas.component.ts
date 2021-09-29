import { Component, OnInit } from '@angular/core';
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

}
