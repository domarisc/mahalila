import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {

  constructor(public navCtrl: NavController, private storage: Storage) { }

  limparDados() {
    this.storage.clear();
  }
}
