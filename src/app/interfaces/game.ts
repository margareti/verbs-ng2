import { Verb } from '../interfaces/verb';

export interface Game {
    date?: string;
    verbs?: Array<Verb>;
    score?: number;
    currentIndex?: number;

}
