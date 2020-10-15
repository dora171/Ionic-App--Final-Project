import { Component, NgZone, OnInit } from '@angular/core';
//import {AlertController} from '@ionic/angular';
import { AlertController, IonItemSliding } from '@ionic/angular';
// import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  todos: string[];
  reorderIsDisabled = true;


  constructor(private menu: MenuController, public alertController: AlertController, private _ngZone: NgZone) {

  }



  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
    console.log('ópen3')
  }


  ngOnInit() {

  }

  toggleReorder() {

  }

}