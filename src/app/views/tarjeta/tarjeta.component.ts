import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/shared/interfaces/foto';

import { FotosService } from 'src/app/shared/services/fotos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  // Atributos
  public fotos: Foto[];

  constructor(private fotosServicio: FotosService) {
    this.fotos = [];
  }

  ngOnInit(): void {

    this.listarFotos();
  }

  private listarFotos(): void {

    this.fotosServicio.listadoFotos().subscribe(
      (data: Foto[]) => {
        this.fotos = [...data];
      }
    )
  }

}
