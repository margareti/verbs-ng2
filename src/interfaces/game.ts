import { Verb } from './verb';

export interface Game {
    date?: Date;
    verbs?: Verb[];
    score?: number;
    currentIndex?: number;
}
