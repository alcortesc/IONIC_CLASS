import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the ContaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contamination',
  templateUrl: 'contamination.html',
})
export class ContaminationPage {
  respuesta: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public proveedor: UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaminationPage');
    this.proveedor.getContaminacion().subscribe(
      (val) => {
        this.respuesta = val;
        console.log(this.respuesta);
      },
      (error) => { console.log(error);}
      );
  }

}
