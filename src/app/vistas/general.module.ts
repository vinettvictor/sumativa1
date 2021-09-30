import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { HomeComponent } from './home/home.component';
import { PaginaDefaultComponent } from './pagina-default/pagina-default.component';
import { ProductosComponent } from './productos/productos.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PagoComponent } from './pago/pago.component';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';


@NgModule({
declarations: [
    CaracteristicasComponent,
    HomeComponent,
    PaginaDefaultComponent,
    ProductosComponent,
    PruebasComponent,
    ModalComponent,
    CategoriasComponent,
    PagoComponent,
    ModalPagoComponent

],

exports: [
    CaracteristicasComponent,
    HomeComponent,
    PaginaDefaultComponent,
    ProductosComponent,
    PruebasComponent,
    ModalComponent,
    CategoriasComponent
],

imports: [
    CommonModule,
    FormsModule,
    RouterModule
]

})

export class GeneralModule { }