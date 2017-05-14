import { Component } from '@angular/core';
import verbs from './verbs.json';
import Verbs from '../../services/verbs';

@Component({
    selector: 'app-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {
    title = 'app works!';

    constructor() {

        if (!Verbs.get()) {
            Verbs.set(verbs);
        }
    }
}
