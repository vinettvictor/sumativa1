import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent implements OnInit {

  //datos a mostrar para Dirección de envio
  @Input() pais: any = null;
  @Input() calle: any = null;
  @Input() ciudad: any = null;
  @Input() region: any = null;
  @Input() codPostal: any = null;


  //Datos a mostrar para Tarjeta
  @Input() tipo: any = null;
  @Input() nombre: any = null;
  @Input() numeroTarjeta: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
