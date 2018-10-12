import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the NuevaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva',
  templateUrl: 'nueva.html',
})
export class NuevaPage {
  users: any[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userservice: UserServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaPage');
    this.userservice.getUsers().subscribe(
    (data) => {
      console.log(data);
      this.users = data["results"];
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
