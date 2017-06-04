import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-game',
  templateUrl: 'newgame.html'
})

export class NewGamePage {
  qtdJogadas;
  dadoFisico = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private storage: Storage) {}

  jogar() {
    this.storage.get('dadoFisico').then((val) => {
      if(val == null) {
        this.showRadio();
      }
    })

    console.log(this.dadoFisico);
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

}
