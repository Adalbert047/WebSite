import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-to-do-adalberto';
  tareas: string[] = ["Adal", "Berto", "Amaya"]
  nuevaTarea : string = ""


  onAdd()
  {
    if(this.nuevaTarea.length != 0)
      {
        this.tareas.push(this.nuevaTarea)
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        this.nuevaTarea = ""
      }
    else{
      Swal.fire({
        icon: "error",
        title: "Estas bien wey",
        text: "Esta vacio",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

  onDelete(tarea : string)
  {
    Swal.fire({
      title: "Estas seguro",
      text: "Se borrara el item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "Tu archivo esta borrado",
          icon: "success"
        });
        this.tareas = this.tareas.filter(v => v !== tarea)
      }
    });
   
  }
}
