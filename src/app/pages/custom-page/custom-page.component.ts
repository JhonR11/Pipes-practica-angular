import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { CreatorPipe } from '../../pipes/Creator.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, CreatorPipe, HeroTextColorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal<string>('Jhon Mazenett')

  uppercase= signal(true)

  toggleButton(){
    if (this.uppercase()===true) {
      this.uppercase.set(false)
    }else{
      this.uppercase.set(true)
    }
    console.log(this.uppercase())
    return this.uppercase()
    
  }

  ///data
  heroes = signal(heroes)

  //filtrado
  sortBy = signal<keyof Hero | null>(null)
  searchQuery=signal('')
}
