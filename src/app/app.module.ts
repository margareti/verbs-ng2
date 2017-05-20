import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/game/game.component';
import { ResultComponent } from './components/result/result.component';
import { OptionsComponent } from './components/options/options.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { HistoryComponent } from './components/history/history.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'game', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
    { path: 'result', component: ResultComponent},
    { path: 'options', component: OptionsComponent},
    { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    GameComponent,
    ResultComponent,
    OptionsComponent,
    DashboardComponent,
    StatsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
