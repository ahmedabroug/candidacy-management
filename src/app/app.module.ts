import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CandidacyCreateComponent } from './candidacy-create/candidacy-create.component';
import { CandidacyDashboardComponent } from './candidacy-dashboard/candidacy-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidacyCreateComponent,
    CandidacyDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
