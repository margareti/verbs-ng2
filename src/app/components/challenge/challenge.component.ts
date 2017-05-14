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
  valid;
  userInput;


  next() {
    ++ this.currentIndex;
    this.replaceIndex = this.genReplaceIndex();
    this.valid = false;
    this.userInput = '';
  }

  onKey(event: any) {
    console.log( event.target.value );
    let keys = ['past', 'pastParticiple'];
    let verbWithPastParticiple = this.verbs[this.currentIndex].tense[keys[this.replaceIndex]];

    console.log(keys[this.replaceIndex])
    console.log(this.verbs[this.currentIndex].tense[keys[this.replaceIndex]]);
    let trimmedValue = event.target.value.trim();
    this.valid = (verbWithPastParticiple) ? (trimmedValue === this.verbs[this.currentIndex].tense[keys[this.replaceIndex]])
     : (trimmedValue === this.verbs[this.currentIndex].tense[keys[0]]);
    console.log('user input ', this.userInput);
  }

  constructor () {
    let currentGame = Games.getCurrentGame();
    if (!currentGame) {
      this.verbs = Verbs.getList(this.limit);
      this.currentIndex = 0;
    }
  }

}
