import { Component, OnInit } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import Verbs from '../../services/verbs';

@Component({
    templateUrl: './options.component.html',
    // styleUrls: ['./app.component.css']
})

export class OptionsComponent implements OnInit {
    private verbs:[Verb];

    ngOnInit() {
        this.verbs = Verbs.get();
        console.log('this.verbs:', this.verbs);
    }

    toggleVerb(verb) {
        verb.disabled = !verb.disabled;
        Verbs.save();
    }
}
