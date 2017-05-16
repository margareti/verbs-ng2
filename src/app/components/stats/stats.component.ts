import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js';

// import './verbs.json';
// var verbs = require('./verbs.json');
@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  // styleUrls: ['./app.component.css']
})
export class StatsComponent implements OnInit {
  title = 'This is the stats!';

  verbs = JSON.parse(localStorage.getItem('verbs'));
  filtered = this.verbs.filter(function(verb) {
    if (verb.stats) {
      return verb;
    };
  });

  constructor () {

  }

  ngOnInit() {
    var ctx = document.getElementById("statsChart");
    console.log('ctx', ctx);

    function genData(arr) {
    var data = {
      labels: [],
      datasets: [{
        label: 'Scored correctly',
        backgroundColor: ['cornflowerblue'],
        borderColor: ['cornflowerblue'],
        borderWidth: 1,
        data: []
      }, {
        label: 'Total',
        backgroundColor: ['pink'],
        borderColor: ['pink'],
        borderWidth: 1,
        data: []
      }]
    };
    arr.forEach(function(verb) {
      console.log('verb in arr ', verb)
      data.labels.push(verb.tense.present);

      data.datasets[0].backgroundColor.push('cornflowerblue');
      data.datasets[1].backgroundColor.push('pink');

      data.datasets[0].data.push(verb.stats.success);
      data.datasets[1].data.push(verb.stats.error);
    });
    return data;
  }


var data = genData(this.filtered);

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
          xAxes: [{
              stacked: true
          }]
      },
      responsive: false
    }
});

  }

}
