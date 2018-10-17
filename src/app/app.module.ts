import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcercaPage } from '../pages/acerca/acerca';
import { NuevaPage } from '../pages/nueva/nueva';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http';
import { ContaminationPage } from '../pages/contamination/contamination';
import { FormularioPage } from '../pages/formulario/formulario';
import { EnviarPage } from '../pages/enviar/enviar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcercaPage,
    NuevaPage,
    AyudaPage,
    ContaminationPage,
    FormularioPage,
    EnviarPage
  ],
    imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcercaPage,
    NuevaPage,
    AyudaPage,
    ContaminationPage,
    FormularioPage,
    EnviarPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
