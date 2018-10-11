import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcercaPage } from '../pages/acerca/acerca';
import { NuevaPage } from '../pages/nueva/nueva';
import { AyudaPage } from '../pages/ayuda/ayuda';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcercaPage,
    NuevaPage,
    AyudaPage
  ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcercaPage,
    NuevaPage,
    AyudaPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
