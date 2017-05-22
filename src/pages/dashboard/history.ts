import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import Games from '../../services/games';
import { Game } from '../../interfaces/game';

@Component({
    selector: 'history',
    templateUrl: './history.html'
})

export class HistoryComponent implements OnInit {
    title:string = 'HISTORY';
    history:Game[] = Games.getHistory();

    constructor () { }

    ngOnInit() {
        let el = document.getElementById("historyChart");

        let data = {
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

        this.history.forEach(function(game, index) {
            data.labels.push(new Date(game.date).getDate() + '/' + (new Date(game.date).getMonth() + 1));
            data.datasets[0].data.push(game.score);
        });

        new Chart(el, {
            type: 'line',
            data: data,
            options: {
                responsive: false,
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
                            'year': 'MMM DD'
                        }
                    }
                }]
            }
        });

    }

}
