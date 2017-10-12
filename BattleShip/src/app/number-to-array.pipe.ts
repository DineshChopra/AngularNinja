import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  transform(value, args:string[]) : any {
    return Array.from(Array(value), (d, i) => i+1)
  }
}

/*
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'numberToArray'})
export class NumberToArray implements PipeTransform {
  transform(value, args:string[]) : any {
    return Array.from(Array(value), (d, i) => i+1)
  }
}
*/
