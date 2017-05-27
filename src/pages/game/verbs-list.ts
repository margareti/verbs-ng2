import { Component, OnInit, Input } from '@angular/core';
import { Verb } from '../../interfaces/verb';
// import { verbsListStyles } from './verbs-list.scss';

@Component({
    selector: 'verbs-list',
    templateUrl: './verbs-list.html'
})

export class VerbsListComponent implements OnInit {

    @Input() verbs:Verb[];
    @Input() currentIndex:number;

    constructor() { }

    ngOnInit() {
        console.log('verbs:', this.verbs);
    }

}
