import { Component, OnInit } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import Verbs from '../../services/verbs';

@Component({
    selector: 'page-options',
    templateUrl: './options.html'
})

export class OptionsPage implements OnInit {
    private verbs:[Verb];

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
