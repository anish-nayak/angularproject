import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Election, VoterRegisterationService } from '../service/voters/voter-registeration.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
  styleUrls: ['./view-schedules.component.css']
})
export class ViewSchedulesComponent implements OnInit {

  elections: Election[] = [];

  constructor(private viewService:VoterRegisterationService,
    private logoutService: LogoutService,
    private router:Router) { }

  ngOnInit(): void {
    const sessionId = localStorage.getItem('sessionId');
    this.viewService.electionSchedule(sessionId).subscribe((res) => {
      console.log(res);
      this.elections = res;
    });
  }
  async onClick() {
    console.log('Clicked..');
    let res = await this.logoutService.logout();

    if (res.message === 'LOGGED OUT SUCCESFULLY') {
      alert('LOGGED OUT SUCCESFULLY');
      this.router.navigate(['/login']);
    } else {
      alert('Some Error Occured..');
    }
  }
}
