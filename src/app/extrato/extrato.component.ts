import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  listaTransferencias: any[] ;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.listaTransferencias = this.service.obterTransferencias;
  }

}