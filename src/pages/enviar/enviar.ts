import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the EnviarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviar',
  templateUrl: 'enviar.html',
})
export class EnviarPage {
  entidad = {
    'nombre':'',
    'nit':'',
    'direccion':'',
    'telefono':'',
    'email':''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public enviar: UserServiceProvider ) {
      storage.get('entidad').then(
        (val)=>{
          console.log(val);
          this.entidad = val;
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviarPage');
  }

  enviarChimenea(){
    this.enviar.enviarChimenea(this.entidad);
  }
}
