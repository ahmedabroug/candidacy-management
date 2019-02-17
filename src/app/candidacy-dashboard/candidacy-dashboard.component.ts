import { Component, OnInit } from '@angular/core';
import { Candidacy } from '../models/candidacy';
import { CANDIDCIES } from './candidancy-dashboard-items';

@Component({
  selector: 'app-candidacy-dashboard',
  templateUrl: './candidacy-dashboard.component.html',
  styleUrls: ['./candidacy-dashboard.component.scss']
})
export class CandidacyDashboardComponent implements OnInit {

  candidacies: Candidacy[];

  variable='variable';

  constructor() { }

  ngOnInit() {
  this.candidacies = CANDIDCIES;

  console.log(this.candidacies);
  console.log(CANDIDCIES);
  


  
  }



}
