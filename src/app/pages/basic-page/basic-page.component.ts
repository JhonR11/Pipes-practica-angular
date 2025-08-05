import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject( LocaleService)
  currentLocale=signal(inject(LOCALE_ID))

  nameLower = signal('jhon')
  nameUpper = signal('JHON')
  fullName = signal('JhOn MaZeNEtt')

  customDate= signal(new Date())

  tickingDateEffect=effect((onCleanup)=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date)
      console.log("tick")
    },1000)
  onCleanup(()=>{
    clearInterval(interval)
  })
  })

  changeLocal(local:availableLocale){
    console.log(local)
    this.localeService.changeLocale(local)
  }

}
