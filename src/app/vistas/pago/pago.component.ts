import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  
  //variables para Envio
  pais: string = "";
  calle: string = "";
  ciudad: string = "";
  region: string = "";
  codPostal: string = "";

  errPais: string = "";
  errCalle: string = "";
  errCiudad: string = "";
  errRegion: string = "";
  errCodPostal: string = "";

  validaEnvio: boolean = false;

  //variables para Tarjeta

  tipo: string = "";
  nombre: string = "";
  numeroTarjeta: number | any;
  codigoSeguridad: number | any ;
  fecha: string | any;


  errTipo: string = "";
  errNombre: string = "";
  errNumeroTarjeta: string = "";
  errCodigoSeguridad: string = "";
  errFecha: string = "";

  validaTarjeta: boolean = false;
  flag: boolean = false;

  constructor(public productosService: ProductosService, public tarjetaService: TarjetaService) { }

  ngOnInit(): void {
  }


  agregarDireccion(): void{
    console.log("Estamos en agregar");
    this.errPais = "";
    this.errCalle = "";
    this.errCiudad = ""; 
    this.errRegion ="";
    this.errCodPostal ="";
    this.validaEnvio = false;

    if(this.pais==""){
      this.errPais = "Por favor ingrese un valor al campo: Pais";
    } 
    if (this.calle==""){
      this.errCalle = "Por favor ingrese un valor al campo: Calle";
    }
    if (this.ciudad==""){
      this.errCiudad = "Por favor ingrese un valor al campo: Ciudad";
    }
    if(this.region==""){
      this.errRegion = "Por favor ingrese un valor al campo: Región";
    }
    if(this.codPostal==""){
      this.errCodPostal = "Por favor ingrese un valor al campo: Código Postal";
    }

    if(this.pais!="" && this.calle!="" && this.ciudad!="" && this.region!="" && this.codPostal!=""){
      this.validaEnvio = true;
    }
  }

  agregarTarjeta(){

    this.errTipo="";
    this.errNombre="";
    this.errNumeroTarjeta="";
    this.errCodigoSeguridad="";
    this.errFecha="";
    this.validaTarjeta = false;

    for (let index in this.tarjetaService.tarjetas){
      if(this.nombre == this.tarjetaService.tarjetas[index].nombreCliente) {
        console.log("El nombre coincide!");
        this.flag = true;
      } else {
        this.flag = false;
      }
      if (this.numeroTarjeta == this.tarjetaService.tarjetas[index].numeroTarjeta){
          console.log("El numero de tarjeta coincide!");
          this.flag = true;
      } else {
        this.flag = false;
      }
      if (this.codigoSeguridad == this.tarjetaService.tarjetas[index].codigoSeguridad){
        console.log("El código de seguridad coincide!");
        this.flag = true;
      } else {
        this.flag = false;
      }
      if (this.tipo == this.tarjetaService.tarjetas[index].tipo){
        console.log("El tipo de tarjeta  coincide!");
        this.flag = true;
      } else {
        this.flag = false;
      }
      if (this.fecha == this.tarjetaService.tarjetas[index].fecha){
        console.log("la fecha de expedicion coincide!");
        this.flag = true;
      } else {
        this.flag = false;
      }

      this.validaTarjeta = this.flag;
    }

  }
}
