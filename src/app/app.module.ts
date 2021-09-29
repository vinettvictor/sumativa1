import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { GeneralModule } from './vistas/general.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
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
