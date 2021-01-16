import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormularioComponent } from './views/formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Atributos
  public usuario: string;

  constructor(private dialogoServicio: MatDialog) {
    this.usuario = '';
  }

  public openDialog(): void {

    let dialogo = this.dialogoServicio.open(FormularioComponent, {
      width: '300px',
      height: '500px'
    });

    dialogo.afterClosed().subscribe(
      (respuesta: string) => {
        this.usuario = respuesta;
      }
    )
  }
}
