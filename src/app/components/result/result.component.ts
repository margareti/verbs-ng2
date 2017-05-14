import { Component } from '@angular/core';
import Games from '../../services/games';
// import './verbs.json';
// var verbs = require('./verbs.json');
@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  // styleUrls: ['./app.component.css']
})
export class ResultComponent {
  title = 'Result component!';
  lastGame;

  constructor() {
    this.lastGame = Games.getLastGameFromHistory() ? Games.getLastGameFromHistory() : {score: 'NO games yet 0', verbs: []};
  }

}
