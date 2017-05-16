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

    public getVerbIndex = (verb) => {
      for (var i = 0; i < this.verbs.length; i++) {
        if (this.verbs[i].tense.present === verb) {
          return i;
        }
      }
    }

    public saveScore = (verb, result) => {
      console.log("saving score!!!");
      var verbIndex = this.getVerbIndex(verb);
      var verbsList = JSON.parse(localStorage.getItem('verbs'));
      if (!verbsList[verbIndex].hasOwnProperty('stats')) {
        verbsList[verbIndex].stats = {
          error: 0,
          success: 0
        };
      }
      verbsList[verbIndex].stats.error += result.error;
      verbsList[verbIndex].stats.success += result.success;
      console.log('ready verb ', verbsList[verbIndex]);
      localStorage.setItem('verbs', JSON.stringify(verbsList));
    }

}

const verbs = new Verbs();
export default verbs;
