import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcercaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})
export class AcercaPage {
  nombre: string;
  miarreglo: any;
  omitir: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = "Alvaro Cortes Cendales";
    this.miarreglo = [
      {'id':'1','nombres':'Alvaro','apellidos':'Cortes','Cargo':'Especialista'},
      {'id':'2','nombres':'Xuxa','apellidos':'Polania','Cargo':'Especialista'},
      {'id':'3','nombres':'Dennis','apellidos':'Campos','Cargo':'Especialista'},
    ];
    this.omitir = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaPage');
  }

}
