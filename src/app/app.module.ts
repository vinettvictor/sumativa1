import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
//import { CategoriasComponent } from './vistas/categorias/categorias.component';
//import { ProductosComponent } from './vistas/productos/productos.component';
//import { LoginComponent } from './login/login/login.component';
//import { RegistroComponent } from './login/registro/registro.component';
//import { HomeComponent } from './vistas/home/home.component';
//import { PaginaDefaultComponent } from './vistas/pagina-default/pagina-default.component';
//import { PruebasComponent } from './vistas/pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { CaracteristicasComponent } from './vistas/caracteristicas/caracteristicas.component';
import { LoginModule } from './login/login.module';
import { GeneralModule } from './vistas/general.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    //CategoriasComponent,
    //ProductosComponent,
    //LoginComponent,
    //RegistroComponent,
    //HomeComponent,
    //PaginaDefaultComponent,
    //PruebasComponent,
    //CaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //siempre se debe importar FormsModule para trabajar con formularios
    FormsModule,
    LoginModule,
    GeneralModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
