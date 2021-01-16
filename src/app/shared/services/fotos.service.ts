import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Foto } from '../interfaces/foto';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private httpClient: HttpClient) { }

  public listadoFotos(): Observable<Foto[]> {

    return this.httpClient.get<Foto[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }
}
