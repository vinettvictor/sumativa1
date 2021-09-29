import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  nombre: string = "";
  apellido: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }


  registro(){
    if(this.nombre !="") {
      this.nombre = this.nombre;
    }else {
      alert("ingresa un nombre!")
    }

    if(this.apellido !="") {
      this.apellido = this.apellido;
    }else {
      alert("ingresa un apellido!")
    }

    if(this.email!=null){
      let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
          if (regex.test(this.email.trim())) {
                alert('Correo validado');
                console.log(this.email);
          } else {
                alert('La direccón de correo no es válida');
          }
    }

    if(this.password !="") {
      this.password = this.password;
    }else {
      alert("ingresa una contraseña!")
    }
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
  }
}
