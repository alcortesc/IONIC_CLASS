import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';
import { NuevaPage } from '../nueva/nueva';
import { AyudaPage } from '../ayuda/ayuda';
import { ContaminationPage } from '../contamination/contamination';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  acerca = AcercaPage;
  nueva = NuevaPage;
  ayuda = AyudaPage;
  contamination = ContaminationPage;
  constructor(
    public navCtrl: NavController,
    public confirmar: AlertController
  ) {
  }
  iraNuevapagina(){
    console.log("Click a nueva pagina");
    this.navCtrl.push(this.nueva)
  }

  iraAyuda(){
    console.log("Click a Ayuda");
    this.navCtrl.setRoot(this.ayuda)
  }

  iraContamination(){
    console.log("Click a Ayuda");
    //this.navCtrl.push(this.contamination)
    let  alert = this.confirmar.create(
      {
        title:'confirmar',
        message: 'Esta seguro que desea confirmar ?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {   //permite cancelar y adicionalmente hace una funcion
              console.log('Escogio NO');
           }
          },
          {
            text: 'SI',
            handler: () => {   //permite cancelar y adicionalmente hace una funcion
              console.log("Click Contaminacion");
              this.navCtrl.push(this.contamination)
          }
        }
        ]
      }
    );
    alert.present();
  }

}
