import { Component, Input } from '@angular/core';

import Games from '../../services/games';
import Verbs from '../../services/verbs';
import { Game } from '../../interfaces/game';
import { Router } from '@angular/router';

@Component({
  templateUrl: './game.component.html',
})

export class GameComponent {
    game:Game = {};
    limit:number = 3;
    response:string = '';
    title:string = 'GAME';
    selectedTense:string = '';
    tenses:[string] = ['present', 'past', 'pastParticiple'];

    constructor(private router: Router) {
        let game:Game = Games.getCurrentGame();

        if (!game) {
            this.game.score = 0;
            this.game.currentIndex = 0;
            this.game.date = new Date();
            this.game.verbs = Verbs.getList(this.limit);
            Games.saveCurrentGame(this.game);
        } else {
            this.game = game;
        }

        this.selectedTense = this.getRandomTense();
    }

    private getRandomTense():string {
        let count = this.tenses.length - 1;
        let index = Math.floor(Math.random() * 100) % count + 1;

        return this.tenses[index];
    }

    public next():void {
        let verb, result;

        verb = this.game.verbs[this.game.currentIndex];
        result = verb.tense[this.selectedTense] === this.response;
        verb.challenge = {response: this.response, tense: this.selectedTense};
        this.game.score += result ? 1 : 0;
        this.game.currentIndex++;


        if (this.game.currentIndex <= this.limit - 1) {
            this.response = '';
            Games.saveCurrentGame(this.game);
            this.selectedTense = this.getRandomTense();
        } else {
            Games.saveCurrentGameToHistory(this.game);
            this.router.navigateByUrl('/result');
        }
    }

}
