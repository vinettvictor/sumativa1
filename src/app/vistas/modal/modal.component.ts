import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
