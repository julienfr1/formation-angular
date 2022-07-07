import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  
  transform(value: string, ...args: number[]): string {
    const position = args[0] ?? 0;   //je prend la valeur args[0]( le premier argument) si il y en a pas en prend 0 ///ex (getchar:2:5:3) arg[0]=2,arg[1]=5
    return value[position];
  }

}