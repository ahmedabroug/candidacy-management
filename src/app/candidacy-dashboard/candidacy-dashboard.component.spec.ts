import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyDashboardComponent } from './candidacy-dashboard.component';

describe('CandidacyDashboardComponent', () => {
  let component: CandidacyDashboardComponent;
  let fixture: ComponentFixture<CandidacyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidacyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidacyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
