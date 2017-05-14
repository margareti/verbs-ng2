import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ResultComponent } from './components/result/result.component';
import { OptionsComponent } from './components/options/options.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { GamesComponent } from './components/games/games.component';
import { ReplaceDirective } from './components/challenge/replace.directive';


const appRoutes: Routes = [
    { path: '', redirectTo: 'challenge', pathMatch: 'full' },
    { path: 'challenge', component: ChallengeComponent },
    { path: 'result', component: ResultComponent},
    { path: 'options', component: OptionsComponent},
    { path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  declarations: [
    MainComponent,
    ChallengeComponent,
    ResultComponent,
    OptionsComponent,
    DashboardComponent,
    StatsComponent,
    GamesComponent,
    ReplaceDirective
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
