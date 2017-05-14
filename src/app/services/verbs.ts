import { Verb } from '../interfaces/verb';

class Verbs {

    private verbs:[Verb];

    constructor() {
        this.verbs = JSON.parse(localStorage.getItem('verbs'));
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

}

const verbs = new Verbs();
export default verbs;
