import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'Creator',
})
export class CreatorPipe implements PipeTransform {

  transform(value: Creator): string {
    return Creator[value]
  }

}
