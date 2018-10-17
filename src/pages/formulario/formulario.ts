import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EnviarPage } from '../enviar/enviar';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  
  entidad = {
    'nombre':'',
    'nit':'',
    'direccion':'',
    'telefono':'',
    'email':''
  }

  enviar = EnviarPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage
  ) {
    storage.set('mivariable','Este es mi valor');
    storage.get('mivariable').then(
      (val) => {
        console.log(val);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }
  enviarEntidad() {
    console.log(this.entidad);
    //Guardar en el local storage
    this.storage.set('entidad', this.entidad).then(
      (data)=> {
        console.log(data);
        this.navCtrl.push(this.enviar);
      }
    );
  }

}
