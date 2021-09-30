import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  
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


  constructor() { }

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

  }
}
