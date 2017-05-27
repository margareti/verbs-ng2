import { Component, OnInit } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import Verbs from '../../services/verbs';

@Component({
    selector: 'page-options',
    templateUrl: './options.html'
})

export class OptionsPage implements OnInit {
    private verbs:[Verb];
    private selectedLevel:string;
    private title:string = 'OPTIONS';

    private levels:any[] = [
        {label: "easy", index: 1},
        {label: "normal", index: 2},
        {label: "difficult", index: 3},
        {label: "hard", index: 4}
    ];

    constructor() {
        this.selectedLevel = this.levels[0].index + '';
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
