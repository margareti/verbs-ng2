import { Game } from '../interfaces/game';

class Games {

    private games:[any];

    // constructor(arr) {
    //     this.games = JSON.parse(localStorage.getItem('verbs'));
    // }
    public getCurrentGame = () => {
      return JSON.parse(localStorage.getItem('currentGame'));
    }




}

const games = new Games();
export default games;
