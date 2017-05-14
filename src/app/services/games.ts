import { Game } from '../interfaces/game';

class Games {

    private verbs:[Verb];

    constructor() {
        this.verbs = JSON.parse(localStorage.getItem('verbs'));
    }

    getRandomEl(arr) {
      return Math.floor(Math.random() * arr.length);
    }

    public get = ():[Verb] => {
        return this.verbs;
    }

    public set = (verbs:[Verb]):void => {
        this.verbs = verbs;
        return localStorage.setItem('verbs', JSON.stringify(verbs));
    }

    public getList = (limit) => {
      var list = [];
      for (var i = 0; i < limit; i++) {
        list.push(this.verbs[this.getRandomEl(this.verbs)]);
      }
      return list;
    }

}

const verbs = new Verbs();
export default verbs;
