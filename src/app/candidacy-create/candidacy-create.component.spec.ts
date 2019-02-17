import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyCreateComponent } from './candidacy-create.component';

describe('CandidacyCreateComponent', () => {
  let component: CandidacyCreateComponent;
  let fixture: ComponentFixture<CandidacyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidacyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidacyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
