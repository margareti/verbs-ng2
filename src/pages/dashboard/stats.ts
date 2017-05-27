import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import Verbs from '../../services/verbs';
import { Verb } from '../../interfaces/verb';

@Component({
    selector: 'stats',
    templateUrl: './stats.html'
})

export class StatsComponent implements OnInit {
    title:string = 'STATS';
    verbs:Verb[];

    constructor() {
        let verbs = Verbs.get();

        this.verbs = verbs;
        // this.verbs = verbs.filter(function(verb:Verb) {
        //     if (verb.stats) return verb;
        // });
    }

    ngOnInit() {
        let el = document.getElementById("statsChart");

        let data = {
            labels: [],
            datasets: [{
                label: 'Success',
                backgroundColor: ['cornflowerblue'],
                borderColor: ['cornflowerblue'],
                borderWidth: 1,
                data: []
            }, {
                label: 'Error',
                backgroundColor: ['pink'],
                borderColor: ['pink'],
                borderWidth: 1,
                data: []
            }]
        };

        this.verbs.forEach(function(verb) {
            data.labels.push(verb.tense.present);
            data.datasets[0].backgroundColor.push('cornflowerblue');
            data.datasets[1].backgroundColor.push('pink');
            data.datasets[0].data.push(verb.stats ? verb.stats.success : 0);
            data.datasets[1].data.push(verb.stats ? verb.stats.error : 0);
        });

        new Chart(el, {
            type: 'horizontalBar',
            data: data,
            options: {
                responsive: false,
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            stepSize: 1
                        }
                    }]
                }
            }
        });

    }

}
