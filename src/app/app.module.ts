import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge.component';
import { ResultComponent } from './result.component';
import { OptionsComponent } from './options.component';
import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats.component';
import { GamesComponent } from './games.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'challenge', pathMatch: 'full' },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'result', component: ResultComponent},
  { path: 'options', component: OptionsComponent},
  { path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    ResultComponent,
    OptionsComponent,
    DashboardComponent,
    StatsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
