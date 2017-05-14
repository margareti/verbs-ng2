import { Verb } from '../interfaces/verb';

class Verbs {

    private verbs:[Verb];

    constructor() {
        this.verbs = JSON.parse(localStorage.getItem('verbs'));
    }

    getRandomIndex(max, iteration = 0) {
        let index = Math.floor(Math.random() * max);

        iteration++;

        console.log('iteration', iteration, this.verbs.length, this.verbs[index].disabled, iteration < this.verbs.length && this.verbs[index].disabled)
        if (iteration < this.verbs.length && this.verbs[index].disabled) {
            return this.getRandomIndex(max, iteration);
        } else if (iteration >= this.verbs.length) {
            console.log('getRandomIndex: RETURN -1');
            index = -1;
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
