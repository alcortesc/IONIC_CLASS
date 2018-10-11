import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaPage } from './nueva';

@NgModule({
  declarations: [
    NuevaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaPage),
  ],
})
export class NuevaPageModule {}
