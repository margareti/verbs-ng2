import { Verb } from '../interfaces/verb';

export interface Game {
    date?: Date;
    verbs?: Verb[];
    score?: number;
    currentIndex?: number;
}
