import { Component } from '@angular/core';

import Games from '../../services/games';
import Verbs from '../../services/verbs';
import { Game } from '../../interfaces/game';
import { Router } from '@angular/router';

@Component({
  templateUrl: './challenge.component.html',
})

export class ChallengeComponent {
  title = 'This is the verb view :)!';
  limit = 10;
  genReplaceIndex() {
    var tenses = ['past', 'pastParticiple'];
    return tenses[Math.floor(Math.random() * 100) % 2];
  }
  hiddenTense = this.genReplaceIndex();

  game:Game = {};
  valid;
  userInput;

  next() {
    if (this.game.currentIndex === this.limit - 1) {
      Games.saveCurrentGameToHistory(this.game);
      this.router.navigateByUrl('/result');
    } else {
      ++ this.game.currentIndex;
      this.hiddenTense = this.genReplaceIndex();
      if (this.valid) {
        ++this.game.score;
        this.valid = false;
      }
      this.userInput = '';
      console.log(this.game)

      Games.saveCurrentGame(this.game);
    }

  }

  onKey(event: any) {
  
    let verbWithPastParticiple = this.game.verbs[this.game.currentIndex].tense[this.hiddenTense];
    let trimmedValue = event.target.value.trim();
    this.valid = (verbWithPastParticiple) ? (trimmedValue === this.game.verbs[this.game.currentIndex].tense[this.hiddenTense])
     : (trimmedValue === this.game.verbs[this.game.currentIndex].tense[0]);
  }


  constructor (private router: Router) {
    this.router = router;
    let currentGame = Games.getCurrentGame();
    if (!currentGame) {
      this.game.verbs = Verbs.getList(this.limit);
      this.game.currentIndex = 0;
      this.game.date = new Date();

      this.game.score = 0;
      Games.saveCurrentGame(this.game);
    } else {
      console.log("Game exists");
      this.game = currentGame;
    }
  }

}
