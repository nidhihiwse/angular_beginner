import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return "<b>Welcome to our class " + value + "</b>";
  }
}
