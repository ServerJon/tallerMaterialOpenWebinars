import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/usuario';

import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  // Atributos
  public usuarios: Array<Usuario>;
  public columnsToDisplay: Array<string>;

  constructor(private usuarioServicio: UsuariosService) {
    this.usuarios = [];
    this.columnsToDisplay = ['id', 'name', 'mail'];
  }

  ngOnInit(): void {

    this.listarUsuarios();
  }

  private listarUsuarios(): void {

    this.usuarioServicio.listadoUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = [...data];
      }
    )
  }

}
