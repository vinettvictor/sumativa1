import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() titulo:any = null;
  @Input() detalle:any = null;
  @Input() accion: any = null;
  @Input() fecha: any = null;
  @Input() mensaje: any = null;

  @Input() nombre: any = null;
  @Input() informacion: any = null;
  @Input() precio: any = null;
  @Input() cantidad: any = null;


  //accionModal , puede ser cualquier nombre
  @Output() propagar = new EventEmitter<string>(); // enviar funcion al html
  msj: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAccion(){
    this.msj = "Enviando datos al padre 1 2 3";
    console.log("enviar datos: ", this.msj);
    this.propagar.emit(this.msj);
  }
}
