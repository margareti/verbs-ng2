import { Verb } from '../interfaces/verb';

class Verbs {

    private verbs:[Verb];

    constructor() {
        this.verbs = JSON.parse(localStorage.getItem('verbs'));
    }

    getRandomIndex(max, iteration = 0) {
        let index = Math.floor(Math.random() * max);

        iteration++;

        if (this.verbs[index].disabled) {
            if (iteration < this.verbs.length)
                return this.getRandomIndex(max, iteration);
            else index = -1;
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

        for (let i = 0; i < limit; i++) {
            list.push(this.verbs[this.getRandomIndex(this.verbs.length)]);
        }

        return list;
    }

    public getVerb(verb:Verb):Verb {
        let verbs = this.get();

        return verbs.filter(v => {
            if (verb.tense.present === v.tense.present) return v;
        })[0];
    }

    public setVerbStats(verb:Verb, success:boolean):void {
        verb = this.getVerb(verb);

        if (!verb.hasOwnProperty('stats')) {
            verb.stats = {error: 0, success: 0};
        }

        verb.stats[success ? 'success' : 'error']++;
        this.save();
    }

}

const verbs = new Verbs();
export default verbs;
