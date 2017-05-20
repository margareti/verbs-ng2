import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import Verbs from '../../services/verbs';
import { Verb } from '../../interfaces/verb';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
    title:string = 'This is the stats!';
    verbs:Verb[];

    constructor() {
        let verbs = Verbs.get();

        this.verbs = verbs.filter(function(verb:Verb) {
            console.log('stats', verb.stats);
            if (verb.stats) return verb;
        });

        console.log('verbs', this.verbs);
    }

    ngOnInit() {
        let ctx = document.getElementById("statsChart");
        console.log('ctx', ctx);

        let data = {
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

        this.verbs.forEach(function(verb) {
            console.log('verb in arr ', verb);
            data.labels.push(verb.tense.present);
            data.datasets[0].backgroundColor.push('cornflowerblue');
            data.datasets[1].backgroundColor.push('pink');
            data.datasets[0].data.push(verb.stats.success);
            data.datasets[1].data.push(verb.stats.error);
        });

        // function genData(arr) {
        //     var data = {
        //         labels: [],
        //         datasets: [{
        //             label: 'Scored correctly',
        //             backgroundColor: ['cornflowerblue'],
        //             borderColor: ['cornflowerblue'],
        //             borderWidth: 1,
        //             data: []
        //         }, {
        //             label: 'Total',
        //             backgroundColor: ['pink'],
        //             borderColor: ['pink'],
        //             borderWidth: 1,
        //             data: []
        //         }]
        //     };
        //
        //     arr.forEach(function(verb) {
        //         console.log('verb in arr ', verb)
        //         data.labels.push(verb.tense.present);
        //         data.datasets[0].backgroundColor.push('cornflowerblue');
        //         data.datasets[1].backgroundColor.push('pink');
        //         data.datasets[0].data.push(verb.stats.success);
        //         data.datasets[1].data.push(verb.stats.error);
        //     });
        //
        //     return data;
        // }

        // var data = genData(this.verbs);

        console.log('data:', data);

        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: {
                responsive: false,
                scales: {
                    xAxes: [{stacked: true}]
                }
            }
        });

    }

}
