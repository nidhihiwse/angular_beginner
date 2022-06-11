import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitwords'
})
export class LimitwordsPipe implements PipeTransform {

  transform(value: string, limito: number = 50, symbol:string="***"): any {
    return value.length > limito ? value.substring(0, limito) + symbol: value; 
  }

}
