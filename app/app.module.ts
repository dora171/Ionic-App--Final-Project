import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HowToUsePage } from './how-to-use/how-to-use.page';
import { AboutPage } from './about/about.page';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { AboutPageModule } from './about/about.module';
import { HowToUsePageModule } from './how-to-use/how-to-use.module';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: "./home/home.module#HomePageModule" },
  { path: 'about', loadChildren: "./about/about.module#AboutPageModule" },
  { path: 'how-to-use', loadChildren: "./how-to-use/how-to-use.module#HowToUsePageModule" },
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    GoogleMaps,
    Geolocation,
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
