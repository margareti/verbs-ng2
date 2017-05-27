import { Component/*, Input*/ } from '@angular/core';
// import { Router } from '@angular/router';

import Games from '../../services/games';
import Verbs from '../../services/verbs';
import { Game } from '../../interfaces/game';

import { ResultPage } from '../result/result';

@Component({
    selector: 'page-game',
    templateUrl: './game.html'
})

export class GamePage {
    game:Game = {};
    limit:number = 10;
    title:string = 'GAME';
    resultPage: ResultPage;

    constructor(/*private router: Router*/ ) {
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
    }
}
