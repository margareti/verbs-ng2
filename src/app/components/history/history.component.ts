import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js';

// import './verbs.json';
// var verbs = require('./verbs.json');
@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  // styleUrls: ['./app.component.css']
})
export class HistoryComponent implements OnInit {
  title = 'This is the history!';

  verbsHistory = JSON.parse(localStorage.getItem('gameHistory'));


  constructor () {
    console.log('hisotry ', this.verbsHistory)
  }

  ngOnInit() {
    var ctx = document.getElementById("historyChart");

    function genData(arr) {
      var data = {
        labels: [],
        datasets: [{
          label: 'Games History By Score',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }]
      };
      arr.forEach(function(game, index) {
        // data.labels.push(index + 1);
        data.labels.push(new Date(game.date).getDate() + '/' + (new Date(game.date).getMonth() + 1));
        // data.labels.push(new Date(game.date))
        data.datasets[0].data.push(game.score);
      });
      return data;
    }
    var data = genData(this.verbsHistory);
    console.log('history ', data)
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                 'millisecond': 'MMM DD',
                 'second': 'MMM DD',
                 'minute': 'MMM DD',
                 'hour': 'MMM DD',
                 'day': 'MMM DD',
                 'week': 'MMM DD',
                 'month': 'MMM DD',
                 'quarter': 'MMM DD',
                 'year': 'MMM DD',
              },
            },

        }],
          responsive: false
        }
    });

  }

}
