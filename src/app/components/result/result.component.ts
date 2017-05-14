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

  constructor() {
    let lastGame = Games.getLastGameFromHistory();
    console.log(lastGame)
  }

}
