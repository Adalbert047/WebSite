import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './clientes';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes() : Observable<Cliente[]>
  {
    return of(CLIENTES);
  }
}
