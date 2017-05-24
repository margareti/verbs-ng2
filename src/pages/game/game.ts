import { Component/*, Input*/ } from '@angular/core';
// import { Router } from '@angular/router';

import Games from '../../services/games';
import Verbs from '../../services/verbs';
import { Game } from '../../interfaces/game';
import { Verb } from '../../interfaces/verb';


@Component({
    selector: 'page-game',
    templateUrl: './game.html',
})

export class GamePage {
    game:Game = {};
    tenses:string[];
    limit:number = 10;
    response:string = '';
    title:string = 'GAME';
    selectedTense:string = '';


    constructor(/*private router: Router*/) {
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

        this.tenses = this.getTenses(this.game.verbs);
        this.selectedTense = this.getRandomTense();
    }

    private getTenses(verbs:Verb[]):string[] {
        let tenses:string[] = [];

        if (verbs.length) {
            tenses = Object.keys(verbs[0].tense);
        }

        return tenses;
    }

    private getRandomTense():string {
        let count = this.tenses.length - 1;
        let index = Math.floor(Math.random() * 100) % count + 1;

        return this.tenses[index];
    }

    public next():void {
        let verb:Verb;
        let success:boolean;

        verb = this.game.verbs[this.game.currentIndex];
        success = verb.tense[this.selectedTense] === this.response;
        verb.challenge = {response: this.response, tense: this.selectedTense};

        this.game.score += +success;
        Verbs.setVerbStats(verb, success);

        if (this.game.currentIndex < this.limit - 1) {
            this.response = '';
            this.game.currentIndex++;
            Games.saveCurrentGame(this.game);
            this.selectedTense = this.getRandomTense();
        } else {
            Games.saveCurrentGameToHistory(this.game);
            console.info('>> navigate to RESULT route!');
            // this.router.navigateByUrl('/result');
        }
    }

}