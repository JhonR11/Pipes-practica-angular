import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'HeroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {

  transform(value: Color): any {
    return ColorMap[value];
  }

}
