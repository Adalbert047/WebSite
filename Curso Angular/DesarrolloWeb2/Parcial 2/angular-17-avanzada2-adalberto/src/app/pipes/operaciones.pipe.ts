import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operaciones',
  standalone: true
})
export class OperacionesPipe implements PipeTransform {

  transform(value: string, n : number, ...args: unknown[]): unknown {

    
    switch(value){
      case "suma":
        {
          return n + 2
        }
        case "resta":
        {
          return n - 2
        }
    }
    return n

  }

}
