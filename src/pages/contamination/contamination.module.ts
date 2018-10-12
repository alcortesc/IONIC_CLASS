import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaminationPage } from './contamination';

@NgModule({
  declarations: [
    ContaminationPage,
  ],
  imports: [
    IonicPageModule.forChild(ContaminationPage),
  ],
})
export class ContaminationPageModule {}
