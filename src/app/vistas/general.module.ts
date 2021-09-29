import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { HomeComponent } from './home/home.component';
import { PaginaDefaultComponent } from './pagina-default/pagina-default.component';
import { ProductosComponent } from './productos/productos.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
declarations: [
    CaracteristicasComponent,
    HomeComponent,
    PaginaDefaultComponent,
    ProductosComponent,
    PruebasComponent

],

imports: [
    CommonModule,
    FormsModule
]

})

export class GeneralModule { }