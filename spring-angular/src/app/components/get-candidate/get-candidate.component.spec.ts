import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCandidateComponent } from './get-candidate.component';

describe('GetCandidateComponent', () => {
  let component: GetCandidateComponent;
  let fixture: ComponentFixture<GetCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
