import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-mostrar-portafolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './mostrar-portafolio.component.html',
  styleUrl: './mostrar-portafolio.component.css'
})
export class MostrarPortafolioComponent {
  portafolio = [ 
    {
      nombre : 'Universidad',
      contenido :"Durante su tiempo en la UTI, Juan se destacó en sus estudios y participó activamente en proyectos innovadores. Fue durante su primer año en la universidad que descubrió su amor por el desarrollo web y la creación de aplicaciones. Se involucró en diversos proyectos estudiantiles que no solo fortalecieron sus habilidades técnicas, sino que también le proporcionaron una visión práctica del mundo labora Después de graduarse con honores, Juan no perdió el tiempo y se sumergió directamente en el campo laboral. Comenzó como desarrollador junior en una startup emergente, donde tuvo la oportunidad de trabajar en proyectos desafiantes y aprender de mentores experimentados. Con el tiempo, ascendió rápidamente, desempeñando roles clave en el desarrollo de productos y liderando equipos de desarrollo.",
    },
    {
      nombre : 'Trabajo',
      contenido :'trabajado en diversas empresas, desde pequeñas startups hasta grandes corporativos tecnológicos. Se ha especializado en el desarrollo full-stack, mostrando habilidades excepcionales en lenguajes como JavaScript, Python y Java. Su portafolio incluye una variedad de aplicaciones web exitosas y contribuciones a proyectos de código abierto.',
    },
    {
      nombre : 'Actualidad',
      contenido :"Juan es conocido por su enfoque colaborativo y su capacidad para liderar equipos con eficacia. Su pasión por la tecnología lo impulsa constantemente a mantenerse actualizado con las últimas tendencias y herramientas en el mundo del desarrollo de software. Juan Martínez es un programador talentoso, educado en la innovadora Universidad Tecnológica de Innovación, que ha forjado una exitosa carrera de 10 años gracias a su dedicación, habilidades técnicas y pasión por la programación",
    },
  ]
}
