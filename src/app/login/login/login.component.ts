import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  insertar(){
    console.log(this.email, this.password);
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
  }

}
