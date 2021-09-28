import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public productosService: ProductosService, public categoriaService: CategoriaService) {
    //carga de toda la data que queramos leer previamente
    //json o consumo de api
    console.log("App component");
  }
  
  title = 'sumativa1';

}
