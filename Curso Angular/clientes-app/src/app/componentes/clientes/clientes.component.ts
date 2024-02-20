import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './clientes';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes : Cliente[] = [
    
  ]


  constructor(private clienteService : ClienteService)
  {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    )
  }

  



}
