import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Page1 } from '../page1/page1';
/*
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';
import { Page4 } from '../page4/page4';
import { Page5 } from '../page5/page5';
import { Page6 } from '../page6/page6';
*/

@Component({
  selector: 'page6',
  templateUrl: 'page6.html'
})

export class Page6 {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage) {}

  jogar() {
    /*if (dado ==1) {

    }

    */

    this.goPage(Page1);
  }

  goPage(page) {
    let modal = this.modalCtrl.create(page);
    modal.present();
  }
}
