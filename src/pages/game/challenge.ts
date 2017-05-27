import { Component, OnInit, Input } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import { Game } from '../../interfaces/game';
import Verbs from '../../services/verbs';
import Games from '../../services/games';

@Component({
    selector: 'challenge',
    templateUrl: './challenge.html'
})

export class ChallengeComponent implements OnInit {

    @Input() verbs:Verb[];
    @Input() currentIndex:number;
    @Input() game: Game;

    tenses:string[];
    response:string = '';
    selectedTense:string = '';
    limit:number = 10;

    constructor() {

   }

    ngOnInit() {
      console.log("challenge verbs ", this.verbs);
      this.tenses = this.getTenses(this.verbs);
      this.selectedTense = this.getRandomTense();
      console.log('tenses', this.tenses);
    }


    private getRandomTense():string {
        let count = this.tenses.length - 1;
        let index = Math.floor(Math.random() * 100) % count + 1;

        return this.tenses[index];
    }

    private getTenses(verbs:Verb[]):string[] {
        let tenses:string[] = [];
        if (verbs && verbs.length) {
            tenses = Object.keys(verbs[0].tense);
        }

        return tenses;
    }

    public next():void {
        let verb:Verb;
        let success:boolean;

        verb = this.verbs[this.currentIndex];
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
