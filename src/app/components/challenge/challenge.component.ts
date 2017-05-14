import { Component } from '@angular/core';

import Games from '../../services/games';
import Verbs from '../../services/verbs';
import { Game } from '../../interfaces/game';

@Component({
  templateUrl: './challenge.component.html',
})

export class ChallengeComponent {
  title = 'This is the verb view :)!';
  verbs = [];
  limit = 10;
  game;
  currentIndex;

  constructor () {
    let currentGame = Games.getCurrentGame();
    console.log('current game', currentGame)
    if (!currentGame) {
      // this.game = new Game(this.verbs);
      this.verbs = Verbs.getList(this.limit);
      console.log(this.verbs);
      this.currentIndex = 0;

    }


  }

}
