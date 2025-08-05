import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe, TitleCasePipe, AsyncPipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1={
  name: 'Jhon',
  gender: 'male',
  age:21,
  address: 'Valledupar, Colombia'
}

const client2={
  name: 'Fernanda',
  gender: 'female',
  age:31,
  address: 'Santa Marta, Colombia'
}


@Component({
  selector: 'uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe,KeyValuePipe,TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {


  //i18n pipe
  client= signal(client1);

  invitacionMap={
    male: 'tenerlo',
    female: 'tenerla'
  }

  changeClient(){
    if(this.client()===client1){
      this.client.set(client2)
      return
    }
    this.client.set(client1)

  }

  //i18n Plural
  clientsMap=signal({
    '=0': 'no hay ningun cliente esperando',
    '=1': 'solo hay 1 cliente esperando',
    '=2': 'tenemos a 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  })

  clients= signal([
    'Maria',
    'Valentina',
    'Jorge',
    'Luis',
    'Javier',
    'Fernando',
    'Mbape',
    'Mojica',
  ])

  deleteClient() {
  this.clients.update( prev=>prev.slice(1))
  } 
 //KeyValuePipe
 profile={
  name: 'Jhon',
  gender: 'male',
  age:21,
  address: 'Valledupar, Colombia'
 }

 // Async Pipe
 promiseValue: Promise<string> = new Promise((resolve, reject)=>{

    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
      console.log('promesa finalizada')
    }, 3500)
 })

 myObservableTimer = interval(2000).pipe(
  tap((value)=>console.log('tap:', value))
 )
}
