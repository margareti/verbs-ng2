import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';
import { StatsComponent } from './components/stats/stats.component';
import { ResultComponent } from './components/result/result.component';
import { OptionsComponent } from './components/options/options.component';
import { HistoryComponent } from './components/history/history.component';
import { VerbsListComponent } from './components/game/verbs-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'game', pathMatch: 'full'},
    {path: 'game', component: GameComponent},
    {path: 'result', component: ResultComponent},
    {path: 'options', component: OptionsComponent},
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    declarations: [
        MainComponent,
        GameComponent,
        StatsComponent,
        ResultComponent,
        OptionsComponent,
        HistoryComponent,
        DashboardComponent,
        VerbsListComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [MainComponent]
})

export class AppModule { }
