import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { GamePage } from '../pages/game/game';
import { VerbsListComponent } from '../pages/game/verbs-list';
import { ResultPage } from '../pages/result/result';
import { OptionsPage } from '../pages/options/options';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HistoryComponent } from '../pages/dashboard/history';
import { StatsComponent } from '../pages/dashboard/stats';
import { FocusDirective } from '../common/focus.directive';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    ResultPage,
    OptionsPage,
    DashboardPage,
    StatsComponent,
    HistoryComponent,
    VerbsListComponent,
    FocusDirective
    // HomePage,
    // ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    ResultPage,
    OptionsPage,
    DashboardPage,
    StatsComponent,
    HistoryComponent
    // HomePage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
