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

  constructor() { }

  ngOnInit(): void {
  }

}
