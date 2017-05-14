import { Component, OnInit } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import Verbs from '../../services/verbs';

@Component({
    // selector: 'options',
    templateUrl: './options.component.html',
    // styleUrls: ['./app.component.css']
})

export class OptionsComponent implements OnInit {
    // title = 'Options component!';
    private verbs:[Verb];

    ngOnInit() {
        this.verbs = Verbs.get();
        console.log('this.verbs:', this.verbs);
    }
}
