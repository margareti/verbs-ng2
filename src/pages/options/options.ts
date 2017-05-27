import { Component, OnInit } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import Verbs from '../../services/verbs';

@Component({
    selector: 'page-options',
    templateUrl: './options.html'
})

export class OptionsPage implements OnInit {
    private verbs:[Verb];
    private selectedLevel:number = 1;
    private title:string = 'OPTIONS';
    private levels:number[] = [1, 2, 3, 4];

    constructor() {
        this.selectedLevel = this.levels[0];
    }

    ngOnInit() {
        this.verbs = Verbs.get();
    }

    getDisabledVerbsCount() {
        return Verbs.get().filter(item => item.disabled).length;
    }

    toggleVerb(verb) {
        Verbs.save();
    }
}
