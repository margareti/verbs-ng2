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

  constructor () {
    console.log("replace index", this.replaceIndex)
    let currentGame = Games.getCurrentGame();
    console.log('current game', currentGame)
    if (!currentGame) {
      this.verbs = Verbs.getList(this.limit);
      console.log(this.verbs);
      this.currentIndex = 0;

    }


  }

}
