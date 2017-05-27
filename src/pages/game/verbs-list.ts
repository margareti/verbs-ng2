import { Component, OnInit, Input } from '@angular/core';
import { Verb } from '../../interfaces/verb';
import { Game } from '../../interfaces/game';

@Component({
    selector: 'verbs-list',
    templateUrl: './verbs-list.html'
})

export class VerbsListComponent implements OnInit {

    @Input() verbs:Verb[];
    @Input() currentIndex:number;
    @Input() game:Game;

    constructor() { }

    ngOnInit() {
        console.log('verbs:', this.verbs);
    }

}
