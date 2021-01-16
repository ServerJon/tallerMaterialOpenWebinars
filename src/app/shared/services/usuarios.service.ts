import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from 'src/app/shared/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  public listadoUsuarios(): Observable<Usuario[]> {

    return this.httpClient.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
  }
}
