import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVoterRequestComponent } from './send-voter-request.component';

describe('SendVoterRequestComponent', () => {
  let component: SendVoterRequestComponent;
  let fixture: ComponentFixture<SendVoterRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendVoterRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendVoterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
