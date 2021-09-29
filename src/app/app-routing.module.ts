import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './vistas/caracteristicas/caracteristicas.component';
import { HomeComponent } from './vistas/home/home.component';
import { LoginComponent } from './vistas/login/login.component';
import { PaginaDefaultComponent } from './vistas/pagina-default/pagina-default.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { PruebasComponent } from './vistas/pruebas/pruebas.component';
import { RegistroComponent } from './vistas/registro/registro.component';

//referencias a los componentes
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'producto', component: ProductosComponent},
    {path: 'login',component: LoginComponent},
    {path: 'registro',component: RegistroComponent},
    {path: 'prueba',component: PruebasComponent},
    {path: 'producto/{id}',component: CaracteristicasComponent},

    //componente 404
    {path: '**', component: PaginaDefaultComponent},


];

//decorador: no olvidar importar 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
