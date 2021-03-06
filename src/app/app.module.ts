import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppVersion } from '@ionic-native/app-version';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';

import { AddressComponent } from '../components/address/address';

import { AppConfig } from './config';

import {
  AgmCoreModule
} from '@agm/core';

export function translateLoaderFactory(http: any) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HistoryPage,
    HomePage,
    TabsPage,
    MapPage,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {},
      // {
      // links: [
        // { component: AboutPage, name: '', segment: '' },
        // { component: HistoryPage, name: '', segment: '' },
        // { component: HomePage, name: '', segment: '' },
      // ]
    // }
    ),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: AppConfig.google_api_key
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:  (translateLoaderFactory),
        deps: [Http]
      }
    }),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HistoryPage,
    HomePage,
    TabsPage,
    MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AppVersion, StatusBar, SplashScreen]
})
export class AppModule {}
