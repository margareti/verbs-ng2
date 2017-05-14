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
  genReplaceIndex() {
    return Math.floor(Math.random() * 100) % 2;
  }
  replaceIndex = this.genReplaceIndex();

  game;
  currentIndex;


  next() {
    ++ this.currentIndex;
    this.replaceIndex = this.genReplaceIndex();
  }

  onKey(event: any) {
    console.log( event.target.value );
  }

  constructor () {
    let currentGame = Games.getCurrentGame();
    if (!currentGame) {
      this.verbs = Verbs.getList(this.limit);
      this.currentIndex = 0;
    }
  }

}
