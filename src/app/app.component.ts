import { Component } from '@angular/core';
import verbs from './verbs.json';
import Verbs from './services/verbs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app works!';

    constructor() {

        if (!Verbs.get()) {
            Verbs.set(verbs);
        }
        console.log('verbs:', Verbs.get());

        // if (!localStorage.getItem('verbsData')) {
        //     console.log('INSERT DATA');
        //     localStorage.setItem('verbsData', JSON.stringify(verbsData));
        // }
        // console.log('verbsData:', JSON.parse(localStorage.getItem('verbsData')));
    }
}
