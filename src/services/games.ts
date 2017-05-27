// import { Game } from '../interfaces/game';

class Games {

    // private games:[any];

    // constructor(arr) {
    //     this.games = JSON.parse(localStorage.getItem('verbs'));
    // }

    public getCurrentGame = () => {
        return JSON.parse(localStorage.getItem('currentGame'));
    }

    public saveCurrentGame = (game) => {
        localStorage.setItem('currentGame', JSON.stringify(game));
    }

    public saveCurrentGameToHistory = (game) => {
        let history = this.getHistory();

        delete game.currentIndex;
        localStorage.removeItem('currentGame');
        history.push(game);
        this.saveHistory(history);
    }

    public getCurrentGameResult = () => {

    }

    public getHistory = () => {
        return JSON.parse(localStorage.getItem('gameHistory')) || [];
    }

    public saveHistory = (history) => {
        localStorage.setItem('gameHistory', JSON.stringify(history));
    }

    public getLastGameFromHistory = () => {
        var history = this.getHistory();
        return history[history.length - 1];
    }


}

const games = new Games();
export default games;
