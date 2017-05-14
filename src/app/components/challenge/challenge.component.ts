import { Component } from '@angular/core';

import Verbs from '../../services/verbs';

@Component({
  templateUrl: './challenge.component.html',
})

export class ChallengeComponent {
  title = 'This is the verb view :)!';
  verbsList = [];
  limit = 10;

  constructor () {

    this.verbsList = Verbs.getList(10);
    console.log(this.verbsList);
  }

}
