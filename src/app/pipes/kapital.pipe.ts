import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kapital'
})
export class KapitalPipe implements PipeTransform {

  
  transform(startKapital: any, termin: any, rente:any): any {
    console.log(startKapital);
    console.log(termin);
    console.log(rente);

    return (startKapital * ( 1 + (rente / 100)) ** termin).toFixed();
  }

}
