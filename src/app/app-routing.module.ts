import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { RegistroComponent } from './vistas/registro/registro.component';

//referencias a los componentes
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'producto', component: ProductosComponent},
    {path: 'login',component: LoginComponent},
    {path: 'registro',component: RegistroComponent}
    //componente 404

];

//decorador: no olvidar importar 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
