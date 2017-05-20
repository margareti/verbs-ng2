import { Component, OnInit, Input } from '@angular/core';
import { Verb } from '../../interfaces/verb';

@Component({
    selector: 'verbs-list',
    templateUrl: './verbs-list.component.html',
})

export class VerbsListComponent implements OnInit {

    @Input() verbs:Verb[];
    @Input() currentIndex:number;

    constructor() { }

    ngOnInit() {
        console.log('verbs:', this.verbs);
    }

}
