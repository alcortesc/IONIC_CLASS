import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=25');

  }

  getContaminacion(){
    return this.http.get('https://shielded-savannah-22643.herokuapp.com/contamination_levels.json');
  }

  enviarChimenea(valor: any){
    this.http.post("https://mysterious-basin-67013.herokuapp.com/entities",valor).subscribe(
    data => {console.log(data)},
    error=> {console.log(error)}
    )
  }
}
