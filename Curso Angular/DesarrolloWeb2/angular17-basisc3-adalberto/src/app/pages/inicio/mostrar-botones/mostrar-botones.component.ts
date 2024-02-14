import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



const alertas: any[] = [
  
  {
    type: 'light',
    message: 'No se a implementado la descarga de CV pq no hay',
  }
]


@Component({
  selector: 'app-mostrar-botones',
  standalone: true,
  imports: [ButtonComponent, NgbAlertModule],
  templateUrl: './mostrar-botones.component.html',
  styleUrl: './mostrar-botones.component.css'
})



export class MostrarBotonesComponent {
  valueVerMas = 'Resumen'
  valueCV = 'Descargar CV'
  alert = alertas
  isTrue = false
  
  message = ''

  
  
  

  close(item : any)
  {

      this.alert.splice(this.alert.indexOf(item), 1)
      this.isTrue = false
      
  }
  reset()
  {
    this.alert = Array.from(alertas)
  }

  mandarPaginaRandom()
  {
    this.message = "No se que mas poner pa"
  }

  verificar()
  {
    this.isTrue = true
  }

}
