import { Pipe, signal, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFly',
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    let resp=("")

    if(value===true){
      resp="Puede volar"
    }else{
      resp="No puede volar"
    }
    return resp
  }

}
