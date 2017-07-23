import { Component } from '@angular/core';
import { AlertController, NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';
import { Page4 } from '../page4/page4';
import { Page5 } from '../page5/page5';
import { Page6 } from '../page6/page6';

@Component({
  selector: 'page-game',
  templateUrl: 'newgame.html'
})

export class NewGamePage {
  dadoFisico = false;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private storage: Storage) {

    this.storage.set('qtdJogadas', 8);
  }

  jogar() {
    this.storage.get('dadoFisico').then((val) => {
      if(val == null || this.dadoFisico) {
        this.showRadio();
      }
    })

    switch(this. jogarDado()) {
      case 1:
        this.goPage(Page1);
        break;
      case 2:
        this.goPage(Page2);
        break;
      case 3:
        this.goPage(Page3);
        break;
      case 4:
        this.goPage(Page4);
        break;
      case 5:
        this.goPage(Page5);
        break;
      case 6:
        this.goPage(Page6);
        break;
    }
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Jogar com o dado físico?');

    alert.addInput({
      type: 'radio',
      label: 'Sim, salvar para todos os jogos.',
      value: '1',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Sim, salvar para esse jogo.',
      value: '2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Não, salvar para todos os jogos.',
      value: '3',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Não, salvar para esse jogo.',
      value: '4',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if(data == 3 || data == 4) {
          this.dadoFisico = false;
        } else {
          this.dadoFisico = true;
        }

        if(data == 1) {
          this.storage.set('dadoFisico', true);
        }

        if(data == 3) {
          this.storage.set('dadoFisico', false);
        }

      }
    });
    alert.present();
  }

  goPage(page) {
    let modal = this.modalCtrl.create(page);
    modal.present();
  }

  jogarDado() {
    return Math.random() * (6 - 1) + 1;
  }

}
