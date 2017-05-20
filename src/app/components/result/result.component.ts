import { Component } from '@angular/core';
import Games from '../../services/games';
import { Game } from '../../interfaces/game';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
})

export class ResultComponent {
    game:Game;
    tenses:string[];
    title = 'RESULT';

    constructor() {
        let game = Games.getLastGameFromHistory();

        this.game = game ? game : {score: 'NO games yet 0', verbs: []};

        if (this.game.verbs.length) {
            this.tenses = Object.keys(this.game.verbs[0].tense);
        }
    }

}
