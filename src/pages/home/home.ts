import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';
import { NuevaPage } from '../nueva/nueva';
import { AyudaPage } from '../ayuda/ayuda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  acerca = AcercaPage;
  nueva = NuevaPage;
  ayuda = AyudaPage;
  constructor(public navCtrl: NavController) {
    
  }
  iraNuevapagina(){
    console.log("Click a nueva pagina");
    this.navCtrl.push(this.nueva)
  }

  iraAyuda(){
    console.log("Click a Ayuda");
    this.navCtrl.setRoot(this.ayuda)
  }


}
