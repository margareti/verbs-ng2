import { Verb } from '../interfaces/verb';

class Verbs {

    private verbs:[Verb];

    constructor() {
        this.verbs = JSON.parse(localStorage.getItem('verbs'));
    }

    getRandomIndex(max) {
        let index = Math.floor(Math.random() * max);
        if (this.verbs[index].disabled) {
            return this.getRandomIndex(max);
        }
        return index;
    }

    public get = ():[Verb] => {
        return this.verbs;
    }

    public set = (verbs:[Verb]):void => {
        this.verbs = verbs;
        return this.save();
    }

    public save = () => {
        return localStorage.setItem('verbs', JSON.stringify(this.verbs));
    }

    public getList = (limit) => {
      var list = [];
      for (var i = 0; i < limit; i++) {
        list.push(this.verbs[this.getRandomIndex(this.verbs.length)]);
      }
      return list;
    }

}

const verbs = new Verbs();
export default verbs;
