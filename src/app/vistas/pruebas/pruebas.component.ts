import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  //fechas
  Fecha: Date = new Date();
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Fecha2: string = new Date().toString();
  Mes: number = new Date().getMonth() + 1;
  //puede ser uno de los 3 tipos de datos, number ,null o string
  Dia: number | null | string = null;
  eliminado: null | string | undefined=null;
  email: string = "";
  password: string = "";

  Contador: number = 0;

  dias_semanas: string[] = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];



  constructor() {
      console.log("Constructor Pruebas");
  }

  ngOnInit(): void {
    console.log("ngOnInit Pruebas");
  }

  //set y get
  get getMes(): number {
    return this.Mes;
  }

  get getDia(): number|null|string {
    return this.Dia;
  }

  //Funciones

  obtenerDia(): void {
    this.Dia = new Date().getDay();
  }

  sumar(): void {
    this.Contador++;
  }

  restar(): void {
    this.Contador--;
  }

  eliminar(): void {
    this.eliminado = this.dias_semanas.pop();
  }

  agregar(dianuevo: string): void{
    if(dianuevo != ""){
        this.dias_semanas.push(dianuevo);
    } else {
      alert("ingresa un día por favor!")
    }
  }

  ingreso(email: string, password: string): void{
    if(email!=null){
      let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
          if (regex.test(email.trim())) {
                alert('Correo validado');
                console.log(this.email);
          } else {
                alert('La direccón de correo no es válida');
          }
    }

    if(password !="") {
      this.password = password;
    }else {
      alert("ingresa una contraseña!")
    }
  }

  insertar(){
    console.log(this.email, this.password);
  }

  /** 
  insertar2(event: any): void{
    console.log("insertando2")
    event.preventDefault();
    alert(event);
  }
  */
}
