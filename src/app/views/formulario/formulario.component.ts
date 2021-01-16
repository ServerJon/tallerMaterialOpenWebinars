import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuario: string;

  constructor(private dialogoRef: MatDialogRef<FormularioComponent>) {
    this.usuario = '';
  }

  ngOnInit(): void {
  }

  public cerrarDialogo(): void {

    this.dialogoRef.close();
  }

}
