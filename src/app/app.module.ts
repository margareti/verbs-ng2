import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VerbComponent } from './verb.component';
import { ResultComponent } from './result.component';
import { OptionsComponent } from './options.component';

const appRoutes: Routes = [
  { path: 'verb', component: VerbComponent },
  { path: 'result', component: ResultComponent},
  { path: 'options', component: OptionsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    VerbComponent,
    ResultComponent,
    OptionsComponent
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
