import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'newgame.html'
})

export class NewGamePage {
  qtdJogadas;
  dadoFisico = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  jogar() {
    this.showRadio();
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
      checked: true
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
        this.dadoFisico = true;
      }
    });
    alert.present();
  }

}
