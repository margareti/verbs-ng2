import { Verb } from '../interfaces/verb';

export interface Game {
    date?: Date;
    verbs?: Array<Verb>;
    score?: number;
    currentIndex?: number;

}
