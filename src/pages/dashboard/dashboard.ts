import { Component } from '@angular/core';
import { StatsComponent } from './stats';
import { HistoryComponent } from './history';

@Component({
    selector: 'page-dashboard',
    templateUrl: './dashboard.html'
})

export class DashboardPage {
    title = 'DASHBOARD';
    stats = StatsComponent;
    history = HistoryComponent;
}
