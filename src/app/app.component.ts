import { Component } from '@angular/core';
import verbs from './verbs.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app works!';

    constructor() {
        if (!localStorage.getItem('verbs')) {
            localStorage.setItem('verbs', verbs);
        }
    }
}
